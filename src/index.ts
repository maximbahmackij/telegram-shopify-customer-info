import "dotenv/config";
import { Scenes, session } from "telegraf";

import type { SceneContext } from "./@types/context";
import bot from "./config/telegraf";
import { start } from "./actions/start";
import { login } from "./actions/login";
import { logout } from "./actions/logout";
import { userInfo } from "./actions/user-info";
import { userOrders } from "./actions/user-orders";

const stage = new Scenes.Stage<SceneContext>([login()]);
bot.use(session());
bot.use(stage.middleware());

bot.start(start);
bot.action("login", async (ctx) => {
  await ctx.answerCbQuery();
  ctx.scene.enter("login");
});
bot.action("logout", logout);
bot.action("user_info", userInfo);
bot.action("user_orders", userOrders);
bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
