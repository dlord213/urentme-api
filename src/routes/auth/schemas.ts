import { FastifySchema } from 'fastify'

// ─── Request / Response shapes ────────────────────────────────────────────────

export const registerSchema: FastifySchema = {
  body: {
    type: 'object',
    required: ['email', 'password', 'firstName', 'lastName'],
    properties: {
      email:     { type: 'string', format: 'email' },
      password:  { type: 'string', minLength: 8 },
      firstName: { type: 'string', minLength: 1 },
      lastName:  { type: 'string', minLength: 1 },
      phone:     { type: 'string' },
    },
    additionalProperties: false,
  },
}

export const loginSchema: FastifySchema = {
  body: {
    type: 'object',
    required: ['email', 'password'],
    properties: {
      email:    { type: 'string', format: 'email' },
      password: { type: 'string' },
    },
    additionalProperties: false,
  },
}

export const refreshSchema: FastifySchema = {
  body: {
    type: 'object',
    required: ['refreshToken'],
    properties: {
      refreshToken: { type: 'string' },
    },
    additionalProperties: false,
  },
}
