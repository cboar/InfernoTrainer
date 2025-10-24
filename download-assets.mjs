import fs from 'node:fs';
import path from 'node:path';

const assets = [
    "models/player_twisted_bow.glb",
    "assets/images/attackstyles/interface/special_attack_background.png",
    "assets/images/hitsplats/damage.png",
    "assets/images/hitsplats/miss.png",
    "assets/sounds/dragon_hit_410.ogg",
    "models/7691_33005.glb",
    "models/7692_33018.glb",
    "models/7693_33001.glb",
    "models/7697_33010.glb",
    "models/7698_33014.glb",
    "models/7699_33000.glb",
    "models/7700_33012.glb",
    "models/7706_33011.glb",
    "models/7707_33036.glb",
    "models/dragon_dart.glb",
    "models/jad_mage_front.glb",
    "models/jad_mage_middle.glb",
    "models/jad_mage_rear.glb",
    "models/jad_range.glb",
    "models/mage_projectile.glb",
    "models/player_ancestral_robe_bottom.glb",
    "models/player_ava_s_assembler.glb",
    "models/player_barrows_gloves.glb",
    "models/player_bow_of_faerdhinen.glb",
    "models/player_crystal_body.glb",
    "models/player_crystal_helm.glb",
    "models/player_crystal_legs.glb",
    "models/player_necklace_of_anguish__or_.glb",
    "models/player_pegasian_boots.glb",
    "models/player_toxic_blowpipe.glb",
    "models/range_projectile.glb",
    "models/scene-v3.glb",
    "models/tekton_meteor.glb",
    "models/tekton_meteor_splat.glb",
    "models/zuk_healer.glb",
    "models/zuk_projectile.glb",
].forEach(asset => download(asset));

async function download(asset) {
  const url = `https://assets-soltrainer.netlify.app/${asset}`;
  try {
    const response = await fetch(url);
    const bytes = await response.arrayBuffer();
    fs.mkdirSync(path.dirname(`public/${asset}`), { recursive: true, force: true });
    fs.writeFileSync(`public/${asset}`, Buffer.from(bytes), 'binary');
  } catch(err) {
    console.error('Error downloading', asset, err);
  }
}
