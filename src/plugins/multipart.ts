import fp from "fastify-plugin";
import multipart from "@fastify/multipart";
import { FastifyInstance } from "fastify";

/**
 * Adds multipart/form-data support for file uploads.
 *
 * Limits are set conservatively — adjust for your use-case:
 *   - fileSize: 10 MB per file
 *   - files: max 5 files per request
 *   - fieldSize: 1 MB for non-file fields
 *
 * @see https://github.com/fastify/fastify-multipart
 */
export default fp(async (fastify: FastifyInstance) => {
  fastify.register(multipart, {
    limits: {
      fileSize: 10 * 1024 * 1024, // 10 MB
      files: 5,
      fieldSize: 1 * 1024 * 1024, // 1 MB
      fields: 20,
    },
    attachFieldsToBody: false, // use request.file() / request.files() manually
  });
});
