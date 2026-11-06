import { Router } from "express";
import * as AS from "./auth.service.js";
import { validate } from "../../middleware/validation.js";
import * as AV from "./auth.validation.js";

const router = Router();
router.post("/signup", validate(AV.signupSchema), AS.signup);
router.post("/signin", validate(AV.signinSchema), AS.signin);
router.post("/google", validate(AV.googleLoginSchema), AS.googleLogin);

export default router;
