import { Router } from "express";
import { getImages } from "../controllers/images.controller.js";

const router = Router();

// Endpoint para obtener todas las escenas con sus URLs de Cloudinary
router.get("/", getImages);

export default router;

