import express from "express";

import {
  getPublicValueServices,
  getAdminValueServices,
  createValueService,
  updateValueService,
  deleteValueService
} from "../controllers/valueServiceController.js"
import adminAuth from "../middlewares/adminAuth.js";
import upload from "../utils/upload.js";

const router = express.Router();

/* PUBLIC */

router.get("/public", getPublicValueServices);

/* ADMIN */

router.get("/admin", adminAuth, getAdminValueServices);

router.post(
  "/",
  adminAuth,
  upload.single("image"),
  createValueService
);

router.put(
  "/:id",
  adminAuth,
  upload.single("image"),
  updateValueService
);

router.delete(
  "/:id",
  adminAuth,
  deleteValueService
);

export default router;