import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertVisitBookingSchema, insertPartnershipInquirySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Visit Bookings API
  app.post("/api/visit-bookings", async (req, res) => {
    try {
      const data = insertVisitBookingSchema.parse(req.body);
      const booking = await storage.createVisitBooking(data);
      res.json(booking);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  app.get("/api/visit-bookings", async (req, res) => {
    try {
      const bookings = await storage.getAllVisitBookings();
      res.json(bookings);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Partnership Inquiries API
  app.post("/api/partnership-inquiries", async (req, res) => {
    try {
      const data = insertPartnershipInquirySchema.parse(req.body);
      const inquiry = await storage.createPartnershipInquiry(data);
      res.json(inquiry);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  app.get("/api/partnership-inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getAllPartnershipInquiries();
      res.json(inquiries);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
