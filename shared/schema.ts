import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const visitBookings = pgTable("visit_bookings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  visitDate: text("visit_date").notNull(),
  name: text("name").notNull(),
  popup: text("popup").notNull(),
  phone: text("phone").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertVisitBookingSchema = createInsertSchema(visitBookings).omit({
  id: true,
  createdAt: true,
});

export type InsertVisitBooking = z.infer<typeof insertVisitBookingSchema>;
export type VisitBooking = typeof visitBookings.$inferSelect;

export const partnershipInquiries = pgTable("partnership_inquiries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  company: text("company").notNull(),
  manager: text("manager").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertPartnershipInquirySchema = createInsertSchema(partnershipInquiries).omit({
  id: true,
  createdAt: true,
});

export type InsertPartnershipInquiry = z.infer<typeof insertPartnershipInquirySchema>;
export type PartnershipInquiry = typeof partnershipInquiries.$inferSelect;
