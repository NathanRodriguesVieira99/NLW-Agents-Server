import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { createQuestionRoute } from "./create-questions.ts";

export const questionsRoutes: FastifyPluginCallbackZod = (app) => {
  app.register(createQuestionRoute);
};
