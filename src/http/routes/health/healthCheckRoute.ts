import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";

export const healthCheckRoute: FastifyPluginCallbackZod = (app) => {
  app.get("/health", () => {
    return "OK";
  });
};
