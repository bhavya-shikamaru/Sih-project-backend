import { Router, Request, Response } from "express";

const router = Router();

// Example sub-route (replace/extend with real routes)
router.get("/ping", (_req: Request, res: Response) => {
    res.json({ success: true, message: "pong" });
});

export default router;