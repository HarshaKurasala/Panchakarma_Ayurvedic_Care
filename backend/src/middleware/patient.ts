// Patient Role Middleware - Ensures only patients can access patient dashboard routes

import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  user?: any;
}

// Verify JWT token and ensure user is a patient
export const authenticatePatient = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  
  if (!token) {
    return res.status(401).json({ success: false, message: "No token provided" });
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET || "panchakarma_secret_key");
    
    if (decoded.role !== "patient") {
      return res.status(403).json({ success: false, message: "Access denied. Patient role required." });
    }
    
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};
