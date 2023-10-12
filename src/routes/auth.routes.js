import { Router } from "express";
import { contactForm } from "../controllers/auth.controllers.js";
const router = Router();

router.post("/contactForm", contactForm);

export default router;
