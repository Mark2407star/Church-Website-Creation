import { pgTable, serial, text, timestamp, boolean } from "drizzle-orm/pg-core";

export const prayerRequests = pgTable("prayer_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  prayerRequest: text("prayer_request").notNull(),
  isUrgent: boolean("is_urgent").default(false),
  isRead: boolean("is_read").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const adminUsers = pgTable("admin_users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
// `npx drizzle-kit push` without bootstrapping Drizzle config first.
export {};
