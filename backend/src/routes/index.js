import { Router } from "express";
import usersRoutes from "./users.routes.js";
import imagesRoutes from "./images.routes.js";

const router = Router();
router.use("/users", usersRoutes);
router.use("/images", imagesRoutes);

export default router;