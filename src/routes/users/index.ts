import { type FastifyPluginAsync } from "fastify";
import { UserService } from "./service.ts";

const users: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  // fastify.addHook('preHandler', fastify.authenticate)

  fastify.get("/", async function (request, reply) {
    const list = await UserService.list();
    return list;
  });

  fastify.get<{ Params: { id: string } }>(
    "/:id",
    async function (request, reply) {
      const user = await UserService.getById(request.params.id);
      if (!user) return reply.notFound();
      return user;
    },
  );

  fastify.post<{ Body: any }>("/", async function (request, reply) {
    const user = await UserService.create(request.body);
    return reply.status(201).send(user);
  });

  fastify.put<{ Params: { id: string }; Body: any }>(
    "/:id",
    async function (request, reply) {
      const user = await UserService.update(request.params.id, request.body);
      return user;
    },
  );

  fastify.delete<{ Params: { id: string } }>(
    "/:id",
    async function (request, reply) {
      await UserService.delete(request.params.id);
      return reply.status(204).send();
    },
  );
};

export default users;
