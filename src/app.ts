import { fastifyCors } from "@fastify/cors";
import { fastifyMultipart } from "@fastify/multipart";
import { fastify } from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { audioRoutes } from "./http/routes/audio/index.ts";
import { healthCheckRoute } from "./http/routes/health/healthCheckRoute.ts";
import { questionsRoutes } from "./http/routes/questions/index.ts";
import { roomsRoutes } from "./http/routes/rooms/index.ts";

export const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, { origin: "http://localhost:5173" });

app.register(fastifyMultipart);

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(healthCheckRoute);
app.register(roomsRoutes);
app.register(questionsRoutes);
app.register(audioRoutes);
