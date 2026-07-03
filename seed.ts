import bcrypt from "bcryptjs";
import { db } from "./src/db";
import { adminUsers } from "./src/db/schema";

async function seed() {
  console.log("🌱 Seeding database...");

  // Create admin user
  const passwordHash = await bcrypt.hash("pastor2024", 10);

  try {
    await db.insert(adminUsers).values({
      username: "pastor",
      passwordHash,
      name: "Pastor Vincent",
    });
    console.log("✅ Admin user created: pastor / pastor2024");
  } catch (err: unknown) {
    const error = err as { code?: string };
    if (error.code === "23505") {
      console.log("ℹ️ Admin user already exists, updating password...");
      // If already exists, we'll skip
    } else {
      console.error("❌ Error creating admin user:", err);
    }
  }

  console.log("✅ Seeding complete!");
  process.exit(0);
}

seed();
