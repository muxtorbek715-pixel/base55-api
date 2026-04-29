import { Router } from "express";
import healthRouter from "./health.js";

const router = Router();

// barcha route larni /api ostiga ulash
router.use("/", healthRouter);

export default router;
