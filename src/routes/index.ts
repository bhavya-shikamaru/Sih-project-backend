import { Router } from "express";

// Import all route modules
import authRoutes from "./auth.routes";
import studentsRoutes from "./students.routes";
import attendanceRoutes from "./attendance.routes";
import academicsRoutes from "./academics.routes";
import riskRoutes from "./risk.routes";

const router = Router();

/**
 * Health / sanity route (optional but useful)
 * GET /api/ping
 */
router.get("/ping", (_req, res) => {
    res.json({ success: true, message: "pong" });
});

/**
 * Route mounting
 * These paths are RELATIVE to /api
 */

// Auth
router.use("/auth", authRoutes);

// Students
router.use("/students", studentsRoutes);

// Attendance
router.use("/attendance", attendanceRoutes);

// Academics
router.use("/academics", academicsRoutes);

// Risk
router.use("/risk", riskRoutes);

export default router;
