import Fastify from "fastify";
import app from "../src/app.js";

const server = Fastify({
  logger: true,
});

server.register(app);

export default async (req: any, res: any) => {
  await server.ready();
  server.server.emit("request", req, res);
};
