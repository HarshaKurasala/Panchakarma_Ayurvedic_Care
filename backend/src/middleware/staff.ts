/**
 * STAFF MIDDLEWARE
 * 
 * Protects staff routes from unauthorized access
 * Only allows users with 'staff' or 'therapist' roles
 */

import type { Request, Response, NextFunction } from "express";

export interface AuthRequest extends Request {
  user?: any;
}

/**
 * Middleware to check if user is staff or therapist
 */
export const isStaff = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      error: "Unauthorized - No user found"
    });
  }

  const allowedRoles = ['staff', 'therapist', 'admin', 'doctor'];

  if (!allowedRoles.includes(req.user.role)) {
    return res.status(403).json({
      success: false,
      error: `Forbidden - User with role '${req.user.role}' is not authorized to access staff routes`
    });
  }

  next();
};

/**
 * Middleware to check if user is admin or staff
 */
export const isAdminOrStaff = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      error: "Unauthorized - No user found"
    });
  }

  const allowedRoles = ['admin', 'staff'];

  if (!allowedRoles.includes(req.user.role)) {
    return res.status(403).json({
      success: false,
      error: `Forbidden - User with role '${req.user.role}' is not authorized`
    });
  }

  next();
};

/**
 * Middleware to check if user is a therapist
 */
export const isTherapist = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      error: "Unauthorized - No user found"
    });
  }

  if (req.user.role !== 'therapist') {
    return res.status(403).json({
      success: false,
      error: `Forbidden - User with role '${req.user.role}' is not a therapist`
    });
  }

  next();
};
