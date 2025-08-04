import { PrismaClient } from '@prisma/client';

declare global {
  // Allow reuse of the PrismaClient instance in development
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db;
}
