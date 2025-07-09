import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { createRoomRoute } from "../rooms/create-room.ts";
import { getRoomQuestionsRoute } from "./get-room-questions.ts";
import { getRoomsRoute } from "./get-rooms.ts";

export const roomsRoutes: FastifyPluginCallbackZod = (app) => {
  app.register(createRoomRoute);
  app.register(getRoomsRoute);
  app.register(getRoomQuestionsRoute);
};
