import type { SceneContext } from "../@types/context";
import { getOrders } from "../shopify/get-orders";
import { escapeMarkdown } from "../helpers/escape-markdown";

export async function userOrders(ctx: SceneContext) {
  await ctx.answerCbQuery();

  const accessToken = ctx.session?.accessToken;
  if (!accessToken) return ctx.reply("❌ You are not logged in. Enter /login");

  try {
    const orders = await getOrders(accessToken);
    if (!orders.length) return ctx.reply("🛒 You don't have orders");

    let message = "📦 *Your latest 5 orders:*\n";
    orders.forEach((order) => {
      const orderNumber = order.orderNumber;
      const amount = escapeMarkdown(order?.totalPrice?.amount || "");
      const currencyCode = escapeMarkdown(
        order?.totalPrice?.currencyCode || ""
      );
      const processedAt = escapeMarkdown(
        new Date(order.processedAt)?.toLocaleDateString() || ""
      );

      message += `\n🆔 *Order \\#${orderNumber}*\n💰 *Amount:* ${amount} ${currencyCode}\n📅 *Date:* ${processedAt}\n`;
    });

    ctx.reply(message, { parse_mode: "MarkdownV2" });
  } catch (error) {
    console.error(error);
    ctx.reply("⚠️ Error retrieving data.");
  }
}
