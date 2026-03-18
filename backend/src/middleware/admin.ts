// Admin Middleware - Validates that the authenticated user has admin role for accessing admin-only routes

import type { Response, NextFunction } from "express";
import type { AuthRequest } from "./auth.js";

// Check if authenticated user has admin role
export const requireAdmin = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.user) {
    return res.status(401).json({ error: "Authentication required" });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Access denied. Admin role required." });
  }

  next();
};

// Check if authenticated user has admin or doctor role
export const requireAdminOrDoctor = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.user) {
    return res.status(401).json({ error: "Authentication required" });
  }

  if (req.user.role !== "admin" && req.user.role !== "doctor") {
    return res.status(403).json({ error: "Access denied. Admin or Doctor role required." });
  }

  next();
};

// Check if authenticated user has admin or staff role
export const requireAdminOrStaff = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.user) {
    return res.status(401).json({ error: "Authentication required" });
  }

  if (req.user.role !== "admin" && req.user.role !== "staff") {
    return res.status(403).json({ error: "Access denied. Admin or Staff role required." });
  }

  next();
};
