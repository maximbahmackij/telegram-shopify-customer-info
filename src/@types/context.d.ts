import { Context } from "telegraf";

interface SceneSession extends Scenes.SceneSession {
  accessToken?: string;
}

export interface SceneContext extends Context {
  session: Session;
  scene: Scenes.SceneContextScene<SceneContext, SceneSession>;
}
