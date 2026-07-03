import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const prayerRequests = pgTable("prayer_requests", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }),
  phone: varchar("phone", { length: 20 }),
  request: text("request").notNull(),
  language: varchar("language", { length: 10 }).default("en"),
  isRead: text("is_read").default("false"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const adminUsers = pgTable("admin_users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 255 }).notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
