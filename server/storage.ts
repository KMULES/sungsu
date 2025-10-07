import { 
  users, 
  visitBookings, 
  partnershipInquiries,
  type User, 
  type InsertUser,
  type VisitBooking,
  type InsertVisitBooking,
  type PartnershipInquiry,
  type InsertPartnershipInquiry
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createVisitBooking(booking: InsertVisitBooking): Promise<VisitBooking>;
  getAllVisitBookings(): Promise<VisitBooking[]>;
  
  createPartnershipInquiry(inquiry: InsertPartnershipInquiry): Promise<PartnershipInquiry>;
  getAllPartnershipInquiries(): Promise<PartnershipInquiry[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createVisitBooking(booking: InsertVisitBooking): Promise<VisitBooking> {
    const [result] = await db
      .insert(visitBookings)
      .values(booking)
      .returning();
    return result;
  }

  async getAllVisitBookings(): Promise<VisitBooking[]> {
    return await db
      .select()
      .from(visitBookings)
      .orderBy(desc(visitBookings.createdAt));
  }

  async createPartnershipInquiry(inquiry: InsertPartnershipInquiry): Promise<PartnershipInquiry> {
    const [result] = await db
      .insert(partnershipInquiries)
      .values(inquiry)
      .returning();
    return result;
  }

  async getAllPartnershipInquiries(): Promise<PartnershipInquiry[]> {
    return await db
      .select()
      .from(partnershipInquiries)
      .orderBy(desc(partnershipInquiries.createdAt));
  }
}

export const storage = new DatabaseStorage();
