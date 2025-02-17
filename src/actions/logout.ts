import type { SceneContext } from "../@types/context";
import { getMainMenu } from "../helpers/get-menu";

export async function logout(ctx: SceneContext) {
  await ctx.answerCbQuery();
  ctx.session.accessToken = undefined;
  await ctx.reply(
    "🚪 You have been logged out of your account.",
    getMainMenu(false)
  );
}
