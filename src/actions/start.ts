import type { SceneContext } from "../@types/context";
import { getMainMenu } from "../helpers/get-menu";

export function start(ctx: SceneContext) {
  if (ctx?.from?.first_name) {
    ctx.reply(`👋 Hi ${ctx.from.first_name}!`);
  }
  ctx.reply("📋 Main menu:", getMainMenu(!!ctx.session.accessToken));
}
