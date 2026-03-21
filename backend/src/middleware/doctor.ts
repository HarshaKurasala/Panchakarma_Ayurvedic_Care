// Doctor Role Middleware - Ensures only doctors can access doctor dashboard routes

import type { Request, Response, NextFunction } from "express";

export interface AuthRequest extends Request {
  user?: any;
}

// Verify user is a doctor
export const isDoctor = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      error: "Unauthorized - No user found"
    });
  }

  if (req.user.role !== "doctor") {
    return res.status(403).json({
      success: false,
      error: `Forbidden - User with role '${req.user.role}' is not authorized to access doctor routes`
    });
  }

  next();
};

// Verify user is a doctor or admin
export const isAdminOrDoctor = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      error: "Unauthorized - No user found"
    });
  }

  const allowedRoles = ["doctor", "admin"];

  if (!allowedRoles.includes(req.user.role)) {
    return res.status(403).json({
      success: false,
      error: `Forbidden - User with role '${req.user.role}' is not authorized to access doctor routes`
    });
  }

  next();
};
