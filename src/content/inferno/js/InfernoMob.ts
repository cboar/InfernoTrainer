import { Mob, Location } from "osrs-sdk";

export class InfernoMob extends Mob {

  override get drawOutline() {
    return false;
  }

  override get drawTrueTile() {
    return true;
  }

  get trueTileRenderOrder(): number | null {
    return 1000;
  }
  
  override get trueTileColor(): number | null {
    const currentHp = this.currentStats.hitpoint;
    const willDie = currentHp - this.incomingDamage <= 0;
    if (willDie) return 0xFF0000;
    return 0x00FF00;
  }

  override drawUILayer(
    tickPercent: number,
    get2dOffset: (heightScale: number) => Location,
    context: OffscreenCanvasRenderingContext2D,
    scale: number,
    hitsplatsAbove = true,
  ) {
    super.drawUILayer(tickPercent, get2dOffset, context, scale, hitsplatsAbove);
    context.restore();

    context.save();
    const middleOffset = get2dOffset(0.5);
    const currentHp = this.currentStats.hitpoint;
    const willDie = currentHp - this.incomingDamage <= 0;
    context.font = "24px OSRS";
    context.fillStyle = "#000000";
    context.fillText(String(currentHp), middleOffset.x + 2, middleOffset.y + 2);
    context.fillStyle = willDie ? "#FF0000" : "#00FF00";
    context.fillText(String(currentHp), middleOffset.x, middleOffset.y);
    context.restore();
  }
}