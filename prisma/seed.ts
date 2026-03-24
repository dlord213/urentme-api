import "dotenv/config";
import { faker } from "@faker-js/faker";
import { PrismaPg } from "@prisma/adapter-pg";
import { hash } from "bcrypt";
import { range, pick } from "../src/utils/seeding_utils";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  }),
});

async function main() {
  console.log("🌱 Seeding database…");

  try {
    const owners = await seedOwners();
    const properties = await seedProperties(owners);
    const units = await seedUnits(properties);
    const tenants = await seedTenants();
    const leases = await seedLeases(units, tenants);
    await seedTransactions(leases);
    const announcements = await seedAnnouncements();
    await seedPropertyAnnouncements(announcements, properties);
    await seedUnitAnnouncements(announcements, units);

    console.log("\n✅ Seed complete!");
  } catch (e) {
    console.log(e);
  }
}

// ─────────────────────────────────────────────
// OWNERS
// ─────────────────────────────────────────────

async function seedOwners() {
  const owners = await Promise.all(
    range(5).map(async (i) =>
      prisma.owner.create({
        data: {
          email: i === 0 ? "admin@urentme.com" : faker.internet.email(),
          passwordHash: await hash("password123", 10),
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          celNum: faker.phone.number(),
          street: faker.location.streetAddress(),
          barangay: faker.location.county(),
          city: faker.location.city(),
          province: faker.location.state(),
          region: "NCR",
        },
      }),
    ),
  );
  console.log(`  ✔ ${owners.length} owners`);
  return owners;
}

// ─────────────────────────────────────────────
// PROPERTIES
// ─────────────────────────────────────────────

async function seedProperties(owners: any[]) {
  const types = [
    "Residential",
    "Commercial",
    "Mixed",
    "Apartment",
    "Condominium",
  ];
  const properties = await Promise.all(
    owners.slice(0, 3).map((owner) =>
      prisma.property.create({
        data: {
          ownerId: owner.id,
          name: `${faker.location.city()} Residences`,
          type: pick(types),
          street: faker.location.streetAddress(),
          barangay: faker.location.county(),
          city: faker.location.city(),
          province: faker.location.state(),
          region: "NCR",
          yearBuilt: faker.number.int({ min: 1990, max: 2024 }),
          description: faker.lorem.sentences(2),
          houseRules: [
            "No smoking",
            "No pets",
            "Quiet hours 10pm–7am",
          ],
        },
      }),
    ),
  );
  console.log(`  ✔ ${properties.length} properties`);
  return properties;
}

// ─────────────────────────────────────────────
// UNITS
// ─────────────────────────────────────────────

async function seedUnits(properties: any[]) {
  const statuses = ["vacant", "occupied", "maintenance", "reserved"];
  const allUnits: any[] = [];
  for (const property of properties) {
    const units = await Promise.all(
      range(6).map((i) =>
        prisma.unit.create({
          data: {
            propertyId: property.id,
            unitNumber: `${i + 1}0${faker.number.int({ min: 1, max: 9 })}`,
            floor: String(i + 1),
            bedrooms: faker.number.int({ min: 1, max: 4 }),
            bathrooms: faker.number.int({ min: 1, max: 3 }),
            squareFeet: faker.number.float({
              min: 400,
              max: 2000,
              fractionDigits: 0,
            }),
            monthlyRentAmount: faker.number.float({
              min: 8000,
              max: 50000,
              fractionDigits: 2,
            }),
            status: pick(statuses),
            description: faker.lorem.sentence(),
          },
        }),
      ),
    );
    allUnits.push(...units);
  }
  console.log(`  ✔ ${allUnits.length} units`);
  return allUnits;
}

// ─────────────────────────────────────────────
// TENANTS
// ─────────────────────────────────────────────

async function seedTenants() {
  const tenants = await Promise.all(
    range(8).map(() =>
      prisma.tenant.create({
        data: {
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: faker.internet.email(),
          celNum: faker.phone.number(),
          dateOfBirth: faker.date.birthdate({ min: 21, max: 65, mode: "age" }),
          emergencyName: faker.person.fullName(),
          emergencyPhone: faker.phone.number(),
          notes: faker.lorem.sentence(),
          moveInDate: faker.date.past({ years: 1 }),
        },
      }),
    ),
  );
  console.log(`  ✔ ${tenants.length} tenants`);
  return tenants;
}

// ─────────────────────────────────────────────
// LEASES
// ─────────────────────────────────────────────

async function seedLeases(units: any[], tenants: any[]) {
  const occupiedUnits = units
    .filter((u) => u.status === "occupied")
    .slice(0, tenants.length);
  const leases: any[] = [];

  for (let i = 0; i < occupiedUnits.length; i++) {
    const unit = occupiedUnits[i];
    const tenant = tenants[i];
    const start = faker.date.past({ years: 1 });
    const end = new Date(start);
    end.setFullYear(end.getFullYear() + 1);

    const lease = await prisma.lease.create({
      data: {
        unitId: unit.id,
        tenantId: tenant.id,
        status: "active",
        leaseStartDate: start,
        leaseEndDate: end,
        terms: "Standard 1-year lease agreement.",
        signedAt: start,
      },
    });
    leases.push(lease);
  }

  // Create one draft lease
  const vacantUnit = units.find((u) => u.status === "vacant");
  if (vacantUnit && tenants.length > 0) {
    const draftLease = await prisma.lease.create({
      data: {
        unitId: vacantUnit.id,
        tenantId: tenants[tenants.length - 1].id,
        status: "draft",
        leaseStartDate: faker.date.soon({ days: 30 }),
        leaseEndDate: faker.date.future({ years: 1 }),
      },
    });
    leases.push(draftLease);
  }

  console.log(`  ✔ ${leases.length} leases`);
  return leases;
}

// ─────────────────────────────────────────────
// TRANSACTIONS
// ─────────────────────────────────────────────

async function seedTransactions(leases: any[]) {
  let count = 0;
  for (const lease of leases.filter((l) => l.status === "active")) {
    // Seed 3 monthly payments per active lease
    for (let m = 0; m < 3; m++) {
      await prisma.transaction.create({
        data: {
          leaseId: lease.id,
          amount: faker.number.float({
            min: 8000,
            max: 50000,
            fractionDigits: 2,
          }),
          reference: faker.string.alphanumeric(12).toUpperCase(),
          transactionDate: faker.date.recent({ days: 90 }),
          notes: `Monthly rent payment #${m + 1}`,
        },
      });
      count++;
    }
  }
  console.log(`  ✔ ${count} transactions`);
}

// ─────────────────────────────────────────────
// ANNOUNCEMENTS
// ─────────────────────────────────────────────

async function seedAnnouncements() {
  const announcements = await Promise.all([
    prisma.announcement.create({
      data: {
        title: "Upcoming Maintenance",
        body: "We will be conducting pest control services next week. Please make sure to clear kitchen areas.",
        isActive: true,
        publishedAt: new Date(),
      },
    }),
    prisma.announcement.create({
      data: {
        title: "Holiday Schedule",
        body: "The management office will be closed during the holiday break from Dec 24 to Jan 2.",
        isActive: true,
        publishedAt: new Date(),
      },
    }),
    prisma.announcement.create({
      data: {
        title: "New Parking Rules",
        body: "Starting next month, all residents must display parking stickers on their vehicles.",
        isActive: false,
      },
    }),
  ]);
  console.log(`  ✔ ${announcements.length} announcements`);
  return announcements;
}

// ─────────────────────────────────────────────
// PROPERTY ANNOUNCEMENTS
// ─────────────────────────────────────────────

async function seedPropertyAnnouncements(
  announcements: any[],
  properties: any[],
) {
  let count = 0;
  for (const announcement of announcements.slice(0, 2)) {
    for (const property of properties.slice(0, 2)) {
      await prisma.propertyAnnouncement.create({
        data: {
          announcementId: announcement.id,
          propertyId: property.id,
        },
      });
      count++;
    }
  }
  console.log(`  ✔ ${count} property announcements`);
}

// ─────────────────────────────────────────────
// UNIT ANNOUNCEMENTS
// ─────────────────────────────────────────────

async function seedUnitAnnouncements(announcements: any[], units: any[]) {
  let count = 0;
  if (announcements.length > 0 && units.length > 0) {
    // Link first announcement to first 3 units
    for (const unit of units.slice(0, 3)) {
      await prisma.unitAnnouncement.create({
        data: {
          announcementId: announcements[0].id,
          unitId: unit.id,
        },
      });
      count++;
    }
  }
  console.log(`  ✔ ${count} unit announcements`);
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
