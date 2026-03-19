import express from "express";
import adminAuth from "../middlewares/adminAuth.js";
import upload from "../utils/upload.js";

import {
getPublicHero,
getAdminHero,
createOrUpdateHero,
deleteHero
} from "../controllers/heroController.js";

const router = express.Router();

/* PUBLIC */

router.get("/public", getPublicHero);

/* ADMIN */

router.get("/admin", adminAuth, getAdminHero);

router.post(
  "/save",
  adminAuth,
  upload.single("image"),
  createOrUpdateHero
);

router.delete(
  "/delete/:id",
  adminAuth,
  deleteHero
);

export default router;