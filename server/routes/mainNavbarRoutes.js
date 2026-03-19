import express from "express";
import adminAuth from "../middlewares/adminAuth.js";

import {
  validateMainNavbar,
  getPublicMainNavbar,
  getAdminMainNavbar,
  createMainNavbar,
  updateMainNavbar,
  deleteMainNavbar
} from "../controllers/mainNavbarController.js";

const router = express.Router();

/* PUBLIC */

router.get("/public", getPublicMainNavbar);

/* ADMIN */

router.get("/admin", adminAuth, getAdminMainNavbar);

router.post(
  "/create",
  adminAuth,
  validateMainNavbar,
  createMainNavbar
);

router.put(
  "/update/:id",
  adminAuth,
  validateMainNavbar,
  updateMainNavbar
);

router.delete(
  "/delete/:id",
  adminAuth,
  deleteMainNavbar
);

export default router;