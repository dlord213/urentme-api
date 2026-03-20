import fp from "fastify-plugin";
import compress from "@fastify/compress";
import { type FastifyInstance } from "fastify";

/**
 * Compresses response payloads (gzip / deflate / brotli).
 * Only applies when the client sends an Accept-Encoding header.
 *
 * @see https://github.com/fastify/fastify-compress
 */
export default fp(async (fastify: FastifyInstance) => {
  fastify.register(compress, {
    global: true,
    threshold: 1024, // only compress responses > 1 KB
    encodings: ["br", "gzip", "deflate"],
  });
});
