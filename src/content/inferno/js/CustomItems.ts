import {
  AncestralRobebottom,
  BarrageSpell,
  BarrowsGloves,
  BowOfFaerdhinen,
  CrystalLegs,
  IceBarrageSpell,
  ItemName,
  KodaiWand,
  PegasianBoots,
} from "osrs-sdk";
import AncientSceptreIcon from "../assets/images/ancient_sceptre.png"
import VirtusRobebottomIcon from "../assets/images/virtus_robebottoms.png"
import AvernicTreadsIcon from "../assets/images/Avernic_treads_(max).png"
import ConflictionGauntletsIcon from "../assets/images/confliction_gauntlets.png"
import BowfaCorruptedIcon from "../assets/images/bowfa.png"
import CrystalLegsBlackIcon from "../assets/images/crystal_legs.png"

export class AncientSceptre extends KodaiWand {
  autocastSpell: BarrageSpell = new IceBarrageSpell();
  spriteSize = { w: 30, h: 31 };

  constructor() {
    super();

    this.bonuses = {
      attack: {
        stab: 20,
        slash: -1,
        crush: 50,
        magic: 20,
        range: 0,
      },
      defence: {
        stab: 2,
        slash: 3,
        crush: 1,
        magic: 15,
        range: 0,
      },
      other: {
        meleeStrength: 60,
        rangedStrength: 0,
        magicDamage: 0.05,
        prayer: -1,
      },
      targetSpecific: {
        undead: 0,
        slayer: 0,
      },
    };
  }

  get itemName(): ItemName {
    return "Ancient sceptre" as ItemName;
  }

  get inventoryImage() {
    return AncientSceptreIcon;
  }
}

export class VirtusRobebottom extends AncestralRobebottom {
  spriteSize = { w: 20, h: 30 };

  constructor() {
    super();
    this.bonuses = {
      attack: {
        stab: 0,
        slash: 0,
        crush: 0,
        magic: 26,
        range: -9,
      },
      defence: {
        stab: 31,
        slash: 28,
        crush: 34,
        magic: 22,
        range: 0,
      },
      other: {
        meleeStrength: 0,
        rangedStrength: 0,
        magicDamage: 0.05,
        prayer: 1,
      },
      targetSpecific: {
        undead: 0,
        slayer: 0,
      },
    };
  }

  get itemName(): ItemName {
    return "Virtus robe bottom" as ItemName;
  }

  get inventoryImage() {
    return VirtusRobebottomIcon;
  }
}

export class AvernicTreads extends PegasianBoots {
  constructor() {
    super();
    this.bonuses = {
      attack: {
        stab: 5,
        slash: 5,
        crush: 5,
        magic: 11,
        range: 15,
      },
      defence: {
        stab: 21,
        slash: 25,
        crush: 25,
        magic: 10,
        range: 10,
      },
      other: {
        meleeStrength: 6,
        rangedStrength: 3,
        magicDamage: 0.02,
        prayer: 0,
      },
      targetSpecific: {
        undead: 0,
        slayer: 0,
      },
    };
  }

  get itemName(): ItemName {
    return "Avernic treads (max)" as ItemName;
  }

  get inventoryImage() {
    return AvernicTreadsIcon;
  }
}

export class ConflictionGauntlets extends BarrowsGloves {
  spriteSize = { w: 32, h: 25 };

  constructor() {
    super();
    this.bonuses = {
      attack: {
        stab: 0,
        slash: 0,
        crush: 0,
        magic: 20,
        range: -4,
      },
      defence: {
        stab: 15,
        slash: 18,
        crush: 7,
        magic: 5,
        range: 5,
      },
      other: {
        meleeStrength: 0,
        rangedStrength: 0,
        magicDamage: 0.07,
        prayer: 2,
      },
      targetSpecific: {
        undead: 0,
        slayer: 0,
      },
    };
  }

  get itemName(): ItemName {
    return "Confliction gauntlets" as ItemName;
  }

  get inventoryImage() {
    return ConflictionGauntletsIcon;
  }
}

export class BowfaCorrupted extends BowOfFaerdhinen {
  get itemName(): ItemName {
    return "Bow of faerdhinen (c)" as ItemName;
  }

  get inventoryImage() {
    return BowfaCorruptedIcon;
  }
}

export class CrystalLegsBlack extends CrystalLegs {
  get inventoryImage() {
    return CrystalLegsBlackIcon;
  }
}