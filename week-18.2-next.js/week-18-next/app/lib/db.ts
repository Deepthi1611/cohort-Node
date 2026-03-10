import { PrismaClient } from "@/app/generated/prisma/client";

// Extend the global object type so TypeScript allows storing the Prisma singleton on it.
const globalForPrisma = globalThis as typeof globalThis & {
  prisma?: PrismaClient;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
