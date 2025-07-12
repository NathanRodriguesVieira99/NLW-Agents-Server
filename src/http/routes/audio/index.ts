import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { uploadAudioRoute } from "./upload-audio.ts";

export const audioRoutes: FastifyPluginCallbackZod = (app) => {
  app.register(uploadAudioRoute);
};
