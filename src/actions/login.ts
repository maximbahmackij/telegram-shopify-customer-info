import { Scenes } from "telegraf";

import type { SceneContext } from "../@types/context";
import { createCustomerAccessToken } from "../shopify/create-customer-access-token";
import { getMainMenu } from "../helpers/get-menu";

export function login() {
  const loginScene = new Scenes.BaseScene<SceneContext>("login");
  loginScene.enter((ctx) => ctx.reply("Enter your email:"));

  loginScene.on("text", async (ctx) => {
    const sceneSession = ctx.scene.session as any;

    if (!sceneSession.email) {
      sceneSession.email = ctx.message.text;
      return ctx.reply("Enter your password:");
    }

    const password = ctx.message.text;
    const email = sceneSession.email;

    try {
      const accessToken = await createCustomerAccessToken(email, password);

      if (!accessToken) {
        await ctx.reply(`❌ Authorization error`);
      }

      ctx.session.accessToken = accessToken;
      await ctx.reply("✅ You have successfully logged in!", getMainMenu(true));
      ctx.scene.leave();
    } catch (error) {
      await ctx.reply("⚠️ Authorization error. Try again.");
    }
  });

  return loginScene;
}
