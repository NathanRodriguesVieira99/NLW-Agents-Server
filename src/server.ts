import { app } from "./app.ts";
import { env } from "./config/env/env.ts";

app.listen({ port: env.PORT });
