import express from "express";

import {
  getAdminAbout,
  getPublicAbout,
  saveAbout,
} from "../controllers/aboutController.js";

import adminAuth from "../middlewares/adminAuth.js";
import upload from "../utils/upload.js";

const router = express.Router();

/* 🌍 PUBLIC */

router.get("/public", getPublicAbout);

/* 🔐 ADMIN */

router.get("/", adminAuth, getAdminAbout);

router.put("/", adminAuth, upload.single("image"), saveAbout);

export default router;