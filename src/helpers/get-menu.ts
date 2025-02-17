import { Markup } from "telegraf";

export const getMainMenu = (isAuthenticated: boolean) => {
  return Markup.inlineKeyboard(
    isAuthenticated
      ? [
          [Markup.button.callback("👤 My information", "user_info")],
          [Markup.button.callback("📦 My orders", "user_orders")],
          [Markup.button.callback("🚪 Logout", "logout")],
        ]
      : [[Markup.button.callback("🔑 Login", "login")]]
  );
};
