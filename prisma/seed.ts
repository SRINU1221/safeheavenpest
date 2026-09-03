import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@safehavenpestcontrol.com';
  const password = 'admin123';

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
    console.log(`✅ Default admin created successfully!\nEmail: ${admin.email}\nPassword: ${password}`);
  } else {
    console.log(`ℹ️ Admin user already exists: ${existingUser.email}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
