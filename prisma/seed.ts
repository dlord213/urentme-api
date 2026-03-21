import { faker } from "@faker-js/faker";
import { PrismaPg } from "@prisma/adapter-pg";
import { hash } from "bcrypt";
import { range, pick } from "../src/utils/seeding_utils";
import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  }),
});

async function main() {
  console.log("🌱 Seeding database…");

  try {
    const users = await seedUsers();
    const owners = await seedOwners();
    const vendors = await seedVendors();
    const properties = await seedProperties(owners, users);
    const units = await seedUnits(properties);
    const tenants = await seedTenants();
    const prospects = await seedProspects(units);
    const accounts = await seedChartOfAccounts();
    const bankAccount = await seedBankAccount(users[0]);
    const leases = await seedLeases(units, tenants);
    await seedLeaseDocuments(leases);
    await seedRentalApplications(prospects, units);
    const tasks = await seedTasks(units, users, vendors, tenants);
    await seedRepairStatusUpdates(tasks);
    await seedTransactions(
      leases,
      tenants,
      vendors,
      owners,
      tasks,
      accounts,
      bankAccount,
      users,
    );
    await seedAccountingExtras(owners, bankAccount);
    await seedAnnouncements(properties, users);
    await seedSignatureRequests(leases, tenants, users);
    await seedPropertyTaxesAndUtilities(properties);
    await seedBankReconciliation(bankAccount);

    console.log("\n✅ Seed complete!");
  } catch (e) {
    console.log(e);
  }
}

async function seedUsers() {
  const roles = ["ADMIN", "MANAGER", "STAFF"] as const;
  const users = await Promise.all(
    range(5).map(async (i) =>
      prisma.user.create({
        data: {
          email: i === 0 ? "admin@urentme.com" : faker.internet.email(),
          passwordHash: await hash("password123", 10),
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          phone: faker.phone.number(),
          role: i === 0 ? "ADMIN" : pick(roles),
        },
      }),
    ),
  );
  console.log(`  ✔ ${users.length} users`);
  return users;
}

async function seedOwners() {
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
  return owners;
}

async function seedVendors() {
  const categories = ["Plumber", "Electrician", "Painter", "Carpenter", "HVAC"];
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
          category: pick(categories),
        },
      }),
    ),
  );
  console.log(`  ✔ ${vendors.length} vendors`);
  return vendors;
}

async function seedProperties(owners: any[], users: any[]) {
  const properties = await Promise.all(
    owners.map((owner) =>
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
          managedByUserId: pick(users).id,
          houseRules: "No smoking. No pets. Quiet hours 10pm–7am.",
        },
      }),
    ),
  );
  console.log(`  ✔ ${properties.length} properties`);
  return properties;
}

async function seedUnits(properties: any[]) {
  const statuses = ["VACANT", "OCCUPIED", "MAINTENANCE", "RESERVED"] as const;
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
            status: pick(statuses),
          },
        }),
      ),
    );
    allUnits.push(...units);
  }
  console.log(`  ✔ ${allUnits.length} units`);
  return allUnits;
}

async function seedTenants() {
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
  return tenants;
}

async function seedProspects(units: any[]) {
  const sources = ["Walk-in", "Facebook", "Referral", "Website", "OLX"];
  const statuses = [
    "NEW",
    "CONTACTED",
    "SHOWING_SCHEDULED",
    "APPLICATION_SENT",
    "CONVERTED",
    "LOST",
  ] as const;
  const prospects = await Promise.all(
    range(5).map(() =>
      prisma.prospect.create({
        data: {
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: faker.internet.email(),
          phone: faker.phone.number(),
          source: pick(sources),
          interestedUnitId: pick(units).id,
          moveInDate: faker.date.soon({ days: 60 }),
          status: pick(statuses),
        },
      }),
    ),
  );
  console.log(`  ✔ ${prospects.length} prospects`);
  return prospects;
}

async function seedChartOfAccounts() {
  const data = [
    { code: "1000", name: "Cash & Bank", type: "ASSET" },
    { code: "1100", name: "Accounts Receivable", type: "ASSET" },
    { code: "2000", name: "Accounts Payable", type: "LIABILITY" },
    { code: "2100", name: "Security Deposits Held", type: "LIABILITY" },
    { code: "3000", name: "Owner Equity", type: "EQUITY" },
    { code: "4000", name: "Rental Income", type: "REVENUE" },
    { code: "4100", name: "Late Fee Income", type: "REVENUE" },
    { code: "5000", name: "Maintenance Expense", type: "EXPENSE" },
    { code: "5100", name: "Utilities Expense", type: "EXPENSE" },
    { code: "5200", name: "Management Fee", type: "EXPENSE" },
  ] as const;

  const accounts = await Promise.all(
    data.map((item) => prisma.chartOfAccount.create({ data: item })),
  );
  console.log(`  ✔ ${accounts.length} chart-of-account entries`);
  return accounts;
}

async function seedBankAccount(admin: any) {
  const bankAccount = await prisma.bankAccount.create({
    data: {
      name: "Main Operating Account",
      bankName: "BDO Unibank",
      accountNumber: "0012345678910",
      balance: 500000,
      managedByUserId: admin.id,
    },
  });
  console.log(`  ✔ 1 bank account`);
  return bankAccount;
}

async function seedLeases(units: any[], tenants: any[]) {
  const occupiedUnits = units
    .filter((u) => u.status === "OCCUPIED")
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

  // Create one draft lease
  const vacantUnit = units.find((u) => u.status === "VACANT");
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
  }

  console.log(`  ✔ ${leases.length + (vacantUnit ? 1 : 0)} leases`);
  return leases;
}

async function seedLeaseDocuments(leases: any[]) {
  if (leases.length === 0) return;
  const docs = await Promise.all(
    leases.slice(0, 3).map((lease) =>
      prisma.leaseDocument.create({
        data: {
          leaseId: lease.id,
          name: "Lease Agreement.pdf",
          url: `https://cdn.urentme.com/docs/${lease.id}/agreement.pdf`,
          mimeType: "application/pdf",
        },
      }),
    ),
  );
  console.log(`  ✔ ${docs.length} lease documents`);
}

async function seedRentalApplications(prospects: any[], units: any[]) {
  const statuses = ["PENDING", "APPROVED", "REJECTED"] as const;
  const apps = await Promise.all(
    prospects.map((prospect) =>
      prisma.rentalApplication.create({
        data: {
          unitId: prospect.interestedUnitId ?? pick(units).id,
          prospectId: prospect.id,
          status: pick(statuses),
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
  console.log(`  ✔ ${apps.length} rental applications`);
}

async function seedTasks(
  units: any[],
  users: any[],
  vendors: any[],
  tenants: any[],
) {
  const types = [
    "TASK",
    "WORK_ORDER",
    "TENANT_REQUEST",
    "OWNER_REQUEST",
  ] as const;
  const statuses = [
    "UNASSIGNED",
    "ASSIGNED",
    "IN_PROGRESS",
    "COMPLETED",
  ] as const;
  const priorities = ["LOW", "MEDIUM", "HIGH", "URGENT"] as const;

  const tasks = await Promise.all(
    range(10).map(() =>
      prisma.task.create({
        data: {
          type: pick(types),
          title: faker.lorem.sentence(4),
          description: faker.lorem.sentences(2),
          status: pick(statuses),
          priority: pick(priorities),
          unitId: pick(units).id,
          assignedToId: Math.random() > 0.3 ? pick(users).id : null,
          vendorId: Math.random() > 0.5 ? pick(vendors).id : null,
          tenantId: Math.random() > 0.7 ? pick(tenants).id : null,
          createdById: pick(users).id,
          dueDate: faker.date.soon({ days: 30 }),
          estimatedCost: faker.number.float({
            min: 500,
            max: 20000,
            fractionDigits: 2,
          }),
        },
      }),
    ),
  );
  console.log(`  ✔ ${tasks.length} tasks / work orders`);
  return tasks;
}

async function seedRepairStatusUpdates(tasks: any[]) {
  const taskToUpdate = tasks.find((t) => t.type === "WORK_ORDER");
  if (!taskToUpdate) return;

  const updates = [
    {
      label: "Technician Assigned",
      description: "Plumber has been assigned to the task.",
    },
    {
      label: "Parts Ordered",
      description: "Spare parts for the sink have been ordered.",
    },
    { label: "In Progress", description: "Repair is currently ongoing." },
  ];

  await Promise.all(
    updates.map((update) =>
      prisma.repairStatusUpdate.create({
        data: {
          taskId: taskToUpdate.id,
          ...update,
        },
      }),
    ),
  );
  console.log(`  ✔ ${updates.length} repair status updates`);
}

async function seedTransactions(
  leases: any[],
  tenants: any[],
  vendors: any[],
  owners: any[],
  tasks: any[],
  accounts: any[],
  bankAccount: any,
  users: any[],
) {
  const bankAssetAccount = accounts.find((a) => a.code === "1000")!;
  const incomeAccount = accounts.find((a) => a.code === "4000")!;
  const expenseAccount = accounts.find((a) => a.code === "5000")!;
  const arAccount = accounts.find((a) => a.code === "1100")!;
  const apAccount = accounts.find((a) => a.code === "2000")!;

  // Lease payments
  for (const lease of leases.slice(0, 5)) {
    const tx = await prisma.transaction.create({
      data: {
        type: "LEASE_PAYMENT",
        status: "COMPLETED",
        amount: lease.rentAmount,
        description: "Monthly Rent Payment",
        date: faker.date.recent({ days: 30 }),
        leaseId: lease.id,
        tenantId: lease.tenantId,
        chartAccountId: incomeAccount.id,
        bankAccountId: bankAccount.id,
        createdById: pick(users).id,
      },
    });

    // Seed Journal Lines for double entry
    await prisma.journalLine.createMany({
      data: [
        {
          transactionId: tx.id,
          chartAccountId: bankAssetAccount.id,
          debit: tx.amount,
          credit: 0,
          description: "Bank Deposit",
        },
        {
          transactionId: tx.id,
          chartAccountId: incomeAccount.id,
          debit: 0,
          credit: tx.amount,
          description: "Rental Income",
        },
      ],
    });
  }

  // Vendor Bills
  for (const task of tasks
    .filter((t) => t.type === "WORK_ORDER" && t.vendorId)
    .slice(0, 2)) {
    const billAmount = task.estimatedCost ?? 1000;
    const bill = await prisma.bill.create({
      data: {
        vendorId: task.vendorId!,
        amount: billAmount,
        dueDate: faker.date.soon({ days: 15 }),
        description: `Repair Bill for ${task.title}`,
        status: "PENDING",
      },
    });

    const tx = await prisma.transaction.create({
      data: {
        type: "BILL",
        status: "PENDING",
        amount: billAmount,
        description: bill.description,
        vendorId: task.vendorId!,
        taskId: task.id,
        chartAccountId: apAccount.id,
        createdById: pick(users).id,
      },
    });

    await prisma.journalLine.createMany({
      data: [
        {
          transactionId: tx.id,
          chartAccountId: expenseAccount.id,
          debit: billAmount,
          credit: 0,
          description: "Maintenance Expense",
        },
        {
          transactionId: tx.id,
          chartAccountId: apAccount.id,
          debit: 0,
          credit: billAmount,
          description: "Accounts Payable",
        },
      ],
    });
  }

  console.log(`  ✔ transactions and journal lines seeded`);
}

async function seedAccountingExtras(owners: any[], bankAccount: any) {
  await prisma.ownerContribution.create({
    data: {
      ownerId: owners[0].id,
      amount: 100000,
      description: "Initial Capital Contribution",
      bankAccountId: bankAccount.id,
    },
  });
  await prisma.ownerDistribution.create({
    data: {
      ownerId: owners[1].id,
      amount: 20000,
      description: "Q1 Distribution",
      bankAccountId: bankAccount.id,
    },
  });
  console.log(`  ✔ owner contributions and distributions seeded`);
}

async function seedAnnouncements(properties: any[], users: any[]) {
  await Promise.all(
    properties.slice(0, 2).map((property) =>
      prisma.announcement.create({
        data: {
          title: "Upcoming Maintenance",
          body: "We will be conducting pest control services next week.",
          status: "PUBLISHED",
          propertyId: property.id,
          createdById: pick(users).id,
          publishedAt: new Date(),
        },
      }),
    ),
  );
  console.log(`  ✔ 2 announcements seeded`);
}

async function seedSignatureRequests(
  leases: any[],
  tenants: any[],
  users: any[],
) {
  if (leases.length === 0) return;
  await prisma.signatureRequest.create({
    data: {
      title: "Sign Lease Agreement",
      documentUrl: "https://cdn.urentme.com/docs/sample.pdf",
      leaseId: leases[0].id,
      requestedById: pick(users).id,
      signerEmail: tenants[0].email,
      signerName: `${tenants[0].firstName} ${tenants[0].lastName}`,
      status: "PENDING",
      expiresAt: faker.date.future(),
    },
  });
  console.log(`  ✔ 1 signature request seeded`);
}

async function seedPropertyTaxesAndUtilities(properties: any[]) {
  for (const property of properties) {
    await prisma.propertyTax.create({
      data: {
        propertyId: property.id,
        taxYear: 2025,
        amount: 50000,
        dueDate: new Date("2025-12-31"),
        referenceNo: faker.string.alphanumeric(10).toUpperCase(),
      },
    });

    await prisma.publicUtility.create({
      data: {
        propertyId: property.id,
        utilityType: "Electricity",
        provider: "Meralco",
        amount: 3500,
        dueDate: faker.date.soon(),
      },
    });
  }
  console.log(`  ✔ property taxes and utility bills seeded`);
}

async function seedBankReconciliation(bankAccount: any) {
  await prisma.bankReconciliation.create({
    data: {
      bankAccountId: bankAccount.id,
      statementDate: new Date(),
      statementBalance: bankAccount.balance,
      clearedBalance: bankAccount.balance,
      difference: 0,
      reconciledAt: new Date(),
      notes: "Monthly reconciliation done.",
    },
  });
  console.log(`  ✔ 1 bank reconciliation seeded`);
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
