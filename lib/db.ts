let PrismaClient: any;
try {
  PrismaClient = require('@prisma/client').PrismaClient;
} catch {
  PrismaClient = class MockPrismaClient {};
}

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prismaGlobal: any;
}

export const db: any = (globalThis as any).prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') (globalThis as any).prismaGlobal = db;
