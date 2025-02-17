import type { SceneContext } from "../@types/context";
import { getCustomer } from "../shopify/get-customer";
import { escapeMarkdown } from "../helpers/escape-markdown";

export async function userInfo(ctx: SceneContext) {
  await ctx.answerCbQuery();

  const accessToken = ctx.session?.accessToken;
  if (!accessToken) return ctx.reply("❌ You are not logged in. Enter /login");

  try {
    const customer = await getCustomer(accessToken);

    if (!customer) return ctx.reply("❌ Failed to retrieve data.");

    const firstName = escapeMarkdown(customer.firstName || "");
    const lastName = escapeMarkdown(customer.lastName || "");
    const email = escapeMarkdown(customer.email || "");
    const phone = escapeMarkdown(customer.phone || "");

    const message = `👤 *Name:* ${firstName} ${lastName}\n📧 *Email:* ${email}\n📞 *Phone:* ${phone}`;

    ctx.reply(message, { parse_mode: "MarkdownV2" });
  } catch (error) {
    console.error(error);
    ctx.reply("⚠️ Error retrieving data.");
  }
}
