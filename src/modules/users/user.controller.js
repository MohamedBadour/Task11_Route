import { Router } from "express";
import * as US from "./user.service.js";
import { auth, allowTo } from "../../middleware/auth.js";

const router = Router();
router.get("/profile", auth, US.getProfile);
router.get("/all", auth, allowTo("admin"), US.getAllUsers);

export default router;
