import { Router } from "express";

const router = Router();

// /api/health ishlashi uchun
router.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

export default router;
