import { fastifyCors } from "@fastify/cors";
import { fastify } from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { questionsRoutes } from "./http/routes/questions/index.ts";
import { roomsRoutes } from "./http/routes/rooms/index.ts";
import { healthCheckRoute } from "./http/routes/health/healthCheckRoute.ts";

export const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, { origin: "http://localhost:5173" });

 app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(healthCheckRoute);
 app.register(roomsRoutes);
app.register(questionsRoutes);
