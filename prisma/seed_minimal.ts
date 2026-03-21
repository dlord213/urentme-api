import { hash } from "bcrypt";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  }),
});

async function main() {
  console.log("🌱 Seeding minimal data…");

  // 1. Admin User
  const admin = await prisma.user.create({
    data: {
      email: "admin@urentme.com",
      passwordHash: await hash("password123", 10),
      firstName: "Admin",
      lastName: "User",
      role: "ADMIN",
    },
  });
  console.log("  ✔ Admin user created");

  // 2. One Owner
  const owner = await prisma.owner.create({
    data: {
      firstName: "John",
      lastName: "Owner",
      email: "john@owner.com",
    },
  });
  console.log("  ✔ One owner created");

  // 3. One Property
  const property = await prisma.property.create({
    data: {
      name: "Minimal Residences",
      address: "123 Main St",
      city: "Quezon City",
      state: "Metro Manila",
      zip: "1100",
      ownerId: owner.id,
      managedByUserId: admin.id,
    },
  });
  console.log("  ✔ One property created");

  // 4. One Unit
  await prisma.unit.create({
    data: {
      propertyId: property.id,
      unitNumber: "101",
      rentAmount: 15000,
      status: "VACANT",
    },
  });
  console.log("  ✔ One unit created");

  console.log("\n✅ Minimal seed complete!");
}

main()
  .catch((e) => {
    console.error("❌ Minimal seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
