import { PrismaClient } from '../generated/prisma/index.js'
import { PrismaPg } from '@prisma/adapter-pg'

export const prisma = new PrismaClient({
  adapter: process.env.DATABASE_URL
    ? new PrismaPg({ connectionString: process.env.DATABASE_URL })
    : undefined,
})
