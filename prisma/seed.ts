import { PrismaClient } from "../src/generated/prisma/index";
import { faker } from "@faker-js/faker";
import { PrismaPg } from "@prisma/adapter-pg";
import * as crypto from "node:crypto";

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  }),
});

// ─── helpers ───────────────────────────────────────────────────────────────

const hash = (plain: string) =>
  crypto.createHash("sha256").update(plain).digest("hex");

const pick = <T>(arr: T[] | readonly T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

const range = (n: number) => Array.from({ length: n }, (_, i) => i);

// ─── main ──────────────────────────────────────────────────────────────────

async function main() {
  console.log("🌱 Seeding database…");

  // ── 1. Users ──────────────────────────────────────────────────────────────
  const roles = ["ADMIN", "MANAGER", "STAFF"] as const;

  const users = await Promise.all(
    range(5).map((i) =>
      prisma.user.create({
        data: {
          email: i === 0 ? "admin@urentme.com" : faker.internet.email(),
          passwordHash: hash("password123"),
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          phone: faker.phone.number(),
          role: i === 0 ? "ADMIN" : pick(roles),
        },
      }),
    ),
  );
  console.log(`  ✔ ${users.length} users`);

  // ── 2. Owners ─────────────────────────────────────────────────────────────
  const owners = await Promise.all(
    range(3).map(() =>
      prisma.owner.create({
        data: {
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: faker.internet.email(),
          phone: faker.phone.number(),
          company: faker.company.name(),
          address: faker.location.streetAddress(),
          city: faker.location.city(),
          state: faker.location.state(),
          zip: faker.location.zipCode(),
          country: "PH",
        },
      }),
    ),
  );
  console.log(`  ✔ ${owners.length} owners`);

  // ── 3. Vendors ────────────────────────────────────────────────────────────
  const vendorCategories = [
    "Plumber",
    "Electrician",
    "Painter",
    "Carpenter",
    "HVAC",
  ];
  const vendors = await Promise.all(
    range(4).map(() =>
      prisma.vendor.create({
        data: {
          name: faker.company.name(),
          contactName: faker.person.fullName(),
          email: faker.internet.email(),
          phone: faker.phone.number(),
          address: faker.location.streetAddress(),
          city: faker.location.city(),
          state: faker.location.state(),
          zip: faker.location.zipCode(),
          category: pick(vendorCategories),
        },
      }),
    ),
  );
  console.log(`  ✔ ${vendors.length} vendors`);

  // ── 4. Properties ─────────────────────────────────────────────────────────
  const properties = await Promise.all(
    owners.map((owner: any) =>
      prisma.property.create({
        data: {
          name: `${faker.location.city()} Residences`,
          type: pick(["RESIDENTIAL", "COMMERCIAL", "MIXED"] as const),
          address: faker.location.streetAddress(),
          city: faker.location.city(),
          state: faker.location.state(),
          zip: faker.location.zipCode(),
          country: "PH",
          yearBuilt: faker.number.int({ min: 1990, max: 2022 }),
          totalUnits: 6,
          ownerId: owner.id,
          managedByUserId: pick(users as any[]).id,
          houseRules: "No smoking. No pets. Quiet hours 10pm–7am.",
        },
      }),
    ),
  );
  console.log(`  ✔ ${properties.length} properties`);

  // ── 5. Units ──────────────────────────────────────────────────────────────
  const unitStatuses = [
    "VACANT",
    "OCCUPIED",
    "MAINTENANCE",
    "RESERVED",
  ] as const;
  const allUnits: any[] = [];
  for (const property of properties) {
    const units = await Promise.all(
      range(6).map((i) =>
        prisma.unit.create({
          data: {
            propertyId: property.id,
            unitNumber: `${i + 1}0${Math.floor(Math.random() * 9) + 1}`,
            floor: String(i + 1),
            bedrooms: faker.number.int({ min: 1, max: 4 }),
            bathrooms: pick([1, 1.5, 2, 2.5, 3]),
            squareFeet: faker.number.float({
              min: 400,
              max: 2000,
              fractionDigits: 0,
            }),
            rentAmount: faker.number.float({
              min: 8000,
              max: 50000,
              fractionDigits: 2,
            }),
            depositAmount: faker.number.float({
              min: 8000,
              max: 50000,
              fractionDigits: 2,
            }),
            status: pick(unitStatuses),
          },
        }),
      ),
    );
    allUnits.push(...units);
  }
  console.log(`  ✔ ${allUnits.length} units`);

  // ── 6. Tenants ────────────────────────────────────────────────────────────
  const tenants = await Promise.all(
    range(8).map(() =>
      prisma.tenant.create({
        data: {
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: faker.internet.email(),
          phone: faker.phone.number(),
          dateOfBirth: faker.date.birthdate({ min: 21, max: 65, mode: "age" }),
          employerName: faker.company.name(),
          monthlyIncome: faker.number.float({
            min: 20000,
            max: 200000,
            fractionDigits: 2,
          }),
          emergencyName: faker.person.fullName(),
          emergencyPhone: faker.phone.number(),
        },
      }),
    ),
  );
  console.log(`  ✔ ${tenants.length} tenants`);

  // ── 7. Prospects ──────────────────────────────────────────────────────────
  const sources = ["Walk-in", "Facebook", "Referral", "Website", "OLX"];
  const prospects = await Promise.all(
    range(5).map(() =>
      prisma.prospect.create({
        data: {
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: faker.internet.email(),
          phone: faker.phone.number(),
          source: pick(sources),
          interestedUnitId: pick(allUnits as any[]).id,
          moveInDate: faker.date.soon({ days: 60 }),
          status: pick([
            "NEW",
            "CONTACTED",
            "SHOWING_SCHEDULED",
            "APPLICATION_SENT",
            "CONVERTED",
            "LOST",
          ] as const),
        },
      }),
    ),
  );
  console.log(`  ✔ ${prospects.length} prospects`);

  // ── 8. Chart of Accounts ──────────────────────────────────────────────────
  const accounts = await Promise.all([
    prisma.chartOfAccount.create({
      data: { code: "1000", name: "Cash & Bank", type: "ASSET" },
    }),
    prisma.chartOfAccount.create({
      data: { code: "1100", name: "Accounts Receivable", type: "ASSET" },
    }),
    prisma.chartOfAccount.create({
      data: { code: "2000", name: "Accounts Payable", type: "LIABILITY" },
    }),
    prisma.chartOfAccount.create({
      data: { code: "2100", name: "Security Deposits Held", type: "LIABILITY" },
    }),
    prisma.chartOfAccount.create({
      data: { code: "3000", name: "Owner Equity", type: "EQUITY" },
    }),
    prisma.chartOfAccount.create({
      data: { code: "4000", name: "Rental Income", type: "REVENUE" },
    }),
    prisma.chartOfAccount.create({
      data: { code: "4100", name: "Late Fee Income", type: "REVENUE" },
    }),
    prisma.chartOfAccount.create({
      data: { code: "5000", name: "Maintenance Expense", type: "EXPENSE" },
    }),
    prisma.chartOfAccount.create({
      data: { code: "5100", name: "Utilities Expense", type: "EXPENSE" },
    }),
    prisma.chartOfAccount.create({
      data: { code: "5200", name: "Management Fee", type: "EXPENSE" },
    }),
  ]);
  console.log(`  ✔ ${accounts.length} chart-of-account entries`);

  // ── 9. Bank Account ───────────────────────────────────────────────────────
  const bankAccount = await prisma.bankAccount.create({
    data: {
      name: "Main Operating Account",
      bankName: "BDO Unibank",
      accountNumber: "0012345678910",
      balance: 500_000,
      managedByUserId: (users[0] as any).id,
    },
  });
  console.log(`  ✔ 1 bank account`);

  // ── 10. Leases (for OCCUPIED units) ───────────────────────────────────────
  const occupiedUnits = allUnits
    .filter((u: any) => u.status === "OCCUPIED")
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
        status: "ACTIVE",
        startDate: start,
        endDate: end,
        rentAmount: unit.rentAmount,
        depositAmount: unit.depositAmount,
        depositHeld: unit.depositAmount,
        paymentDueDay: 1,
        lateFeeGraceDays: 5,
        lateFeeAmount: 500,
        signedAt: start,
      },
    });
    leases.push(lease);
  }
  console.log(`  ✔ ${leases.length} active leases`);

  // ── 11. Draft Lease ───────────────────────────────────────────────────────
  const vacantUnit = allUnits.find((u: any) => u.status === "VACANT");
  if (vacantUnit) {
    await prisma.lease.create({
      data: {
        unitId: vacantUnit.id,
        tenantId: tenants[tenants.length - 1].id,
        status: "DRAFT",
        startDate: faker.date.soon({ days: 30 }),
        endDate: faker.date.future({ years: 1 }),
        rentAmount: vacantUnit.rentAmount,
        depositAmount: vacantUnit.depositAmount,
      },
    });
    console.log(`  ✔ 1 draft lease`);
  }

  // ── 12. Rental Applications ───────────────────────────────────────────────
  await Promise.all(
    prospects.slice(0, 3).map((prospect: any) =>
      prisma.rentalApplication.create({
        data: {
          unitId: prospect.interestedUnitId ?? pick(allUnits as any[]).id,
          prospectId: prospect.id,
          status: pick(["PENDING", "APPROVED", "REJECTED"] as const),
          moveInDate: prospect.moveInDate,
          monthlyIncome: faker.number.float({
            min: 20000,
            max: 200000,
            fractionDigits: 2,
          }),
        },
      }),
    ),
  );
  console.log(`  ✔ 3 rental applications`);

  // ── 13. Tasks & Work Orders ───────────────────────────────────────────────
  const taskTypes = [
    "TASK",
    "WORK_ORDER",
    "TENANT_REQUEST",
    "OWNER_REQUEST",
  ] as const;
  const taskStatuses = [
    "UNASSIGNED",
    "ASSIGNED",
    "IN_PROGRESS",
    "COMPLETED",
  ] as const;
  const priorities = ["LOW", "MEDIUM", "HIGH", "URGENT"] as const;

  const tasks = await Promise.all(
    range(8).map(() =>
      prisma.task.create({
        data: {
          type: pick(taskTypes),
          title: faker.lorem.sentence(4),
          description: faker.lorem.sentences(2),
          status: pick(taskStatuses),
          priority: pick(priorities),
          unitId: pick(allUnits as any[]).id,
          assignedToId: Math.random() > 0.3 ? pick(users as any[]).id : null,
          vendorId: Math.random() > 0.5 ? pick(vendors as any[]).id : null,
          createdById: pick(users as any[]).id,
          dueDate: faker.date.soon({ days: 30 }),
          estimatedCost: faker.number.float({
            min: 500,
            max: 50000,
            fractionDigits: 2,
          }),
        },
      }),
    ),
  );
  console.log(`  ✔ ${tasks.length} tasks / work orders`);

  // ── 14. Transactions ──────────────────────────────────────────────────────
  const incomeAccount = accounts.find((a: any) => a.code === "4000")!;
  const arAccount = accounts.find((a: any) => a.code === "1100")!;

  // Lease payments for each active lease
  for (const lease of leases.slice(0, 3)) {
    await prisma.transaction.create({
      data: {
        type: "LEASE_PAYMENT",
        status: "COMPLETED",
        amount: lease.rentAmount,
        description: "Monthly rent payment",
        date: faker.date.recent({ days: 30 }),
        leaseId: lease.id,
        tenantId: lease.tenantId,
        chartAccountId: incomeAccount.id,
        bankAccountId: bankAccount.id,
        createdById: pick(users as any[]).id,
      },
    });
  }
  console.log(`  ✔ ${leases.slice(0, 3).length} lease payment transactions`);

  // Post a charge
  if (leases.length > 0) {
    await prisma.transaction.create({
      data: {
        type: "CHARGE",
        status: "PENDING",
        amount: 500,
        description: "Late fee charge",
        leaseId: leases[0].id,
        tenantId: leases[0].tenantId,
        chartAccountId: arAccount.id,
        createdById: pick(users as any[]).id,
      },
    });
  }

  // Owner distribution
  await prisma.transaction.create({
    data: {
      type: "OWNER_DISTRIBUTION",
      status: "COMPLETED",
      amount: faker.number.float({
        min: 50000,
        max: 200000,
        fractionDigits: 2,
      }),
      description: "Monthly owner distribution",
      ownerId: owners[0].id,
      bankAccountId: bankAccount.id,
      createdById: pick(users as any[]).id,
    },
  });

  // Vendor bill
  const bill = await prisma.bill.create({
    data: {
      vendorId: vendors[0].id,
      amount: faker.number.float({ min: 5000, max: 30000, fractionDigits: 2 }),
      dueDate: faker.date.soon({ days: 15 }),
      description: "Maintenance services",
      status: "PENDING",
    },
  });

  await prisma.transaction.create({
    data: {
      type: "BILL",
      status: "PENDING",
      amount: bill.amount,
      description: bill.description,
      vendorId: vendors[0].id,
      createdById: pick(users as any[]).id,
    },
  });
  console.log(`  ✔ transactions seeded (payments, charge, distribution, bill)`);

  // ── 15. Owner Contributions & Distributions ───────────────────────────────
  await prisma.ownerContribution.create({
    data: {
      ownerId: owners[0].id,
      amount: 100_000,
      description: "Initial capital contribution",
      bankAccountId: bankAccount.id,
    },
  });
  await prisma.ownerDistribution.create({
    data: {
      ownerId: owners[0].id,
      amount: 30_000,
      description: "Q1 distribution",
      bankAccountId: bankAccount.id,
    },
  });
  console.log(`  ✔ 1 owner contribution, 1 owner distribution`);

  // ── 16. Announcements ─────────────────────────────────────────────────────
  await Promise.all(
    properties.slice(0, 2).map((property: any) =>
      prisma.announcement.create({
        data: {
          title: faker.lorem.sentence(5),
          body: faker.lorem.paragraphs(2),
          status: pick(["PUBLISHED", "DRAFT"] as const),
          propertyId: property.id,
          createdById: pick(users as any[]).id,
          publishedAt: new Date(),
        },
      }),
    ),
  );
  console.log(`  ✔ 2 announcements`);

  // ── 17. Signature Requests ────────────────────────────────────────────────
  if (leases.length > 0) {
    await prisma.signatureRequest.create({
      data: {
        title: "Lease Agreement - Sign Here",
        documentUrl: "https://cdn.urentme.com/leases/sample-lease.pdf",
        leaseId: leases[0].id,
        requestedById: pick(users as any[]).id,
        signerEmail: tenants[0].email,
        signerName: `${tenants[0].firstName} ${tenants[0].lastName}`,
        status: "PENDING",
        expiresAt: faker.date.soon({ days: 7 }),
      },
    });
    console.log(`  ✔ 1 signature request`);
  }

  // ── 18. Property Taxes & Utilities ────────────────────────────────────────
  await Promise.all(
    properties.map((p: any) =>
      prisma.propertyTax.create({
        data: {
          propertyId: p.id,
          taxYear: 2025,
          amount: faker.number.float({
            min: 20000,
            max: 80000,
            fractionDigits: 2,
          }),
          dueDate: new Date("2025-12-31"),
          referenceNo: faker.string.alphanumeric(10).toUpperCase(),
        },
      }),
    ),
  );

  const utilityTypes = ["Electricity", "Water", "Gas", "Internet"];
  await Promise.all(
    properties.flatMap((p: any) =>
      utilityTypes.slice(0, 2).map((type) =>
        prisma.publicUtility.create({
          data: {
            propertyId: p.id,
            utilityType: type,
            provider: faker.company.name(),
            accountNo: faker.string.numeric(10),
            billingPeriodStart: new Date("2026-02-01"),
            billingPeriodEnd: new Date("2026-02-28"),
            amount: faker.number.float({
              min: 3000,
              max: 20000,
              fractionDigits: 2,
            }),
            dueDate: new Date("2026-03-15"),
          },
        }),
      ),
    ),
  );
  console.log(
    `  ✔ ${properties.length} property taxes, ${properties.length * 2} utility bills`,
  );

  // ── 19. Bank Reconciliation ───────────────────────────────────────────────
  await prisma.bankReconciliation.create({
    data: {
      bankAccountId: bankAccount.id,
      statementDate: new Date("2026-02-28"),
      statementBalance: 498_500,
      clearedBalance: 498_500,
      difference: 0,
      reconciledAt: new Date("2026-03-01"),
      notes: "February 2026 reconciliation completed.",
    },
  });
  console.log(`  ✔ 1 bank reconciliation`);

  console.log("\n✅ Seed complete!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
