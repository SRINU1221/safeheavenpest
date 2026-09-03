const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@safehavenpestcontrol.com';
  const password = 'admin123';

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!existingUser) {
      const passwordHash = await bcrypt.hash(password, 10);
      const admin = await prisma.user.create({
        data: {
          name: 'SafeHaven Admin',
          email,
          passwordHash,
          role: 'admin',
        },
      });
      console.log(`✅ Default admin created: ${admin.email}`);
    } else {
      console.log(`ℹ️ Admin user already exists: ${existingUser.email}`);
    }
  } catch (e) {
    console.error('Seed error:', e);
  }
}

main()
  .finally(async () => {
    await prisma.$disconnect();
  });
