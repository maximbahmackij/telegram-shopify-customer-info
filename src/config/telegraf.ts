import "dotenv/config";
import { Telegraf } from "telegraf";

import type { SceneContext } from "../@types/context";

const bot = new Telegraf<SceneContext>(process.env.BOT_TOKEN as string);

export default bot;
