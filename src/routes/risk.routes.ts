import { Router } from "express";

import authRoutes from "./auth.routes";
import studentRoutes from "./students.routes";
import attendanceRoutes from "./attendance.routes";
import academicRoutes from "./academics.routes";
import riskRoutes from "./risk.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/students", studentRoutes);
router.use("/attendance", attendanceRoutes);
router.use("/academics", academicRoutes);
router.use("/risk", riskRoutes);

export default router;
