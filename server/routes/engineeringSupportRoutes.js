import express from "express";

import {
  getPublicEngineeringSupport,
  getAdminEngineeringSupport,
  createEngineeringSupport,
  updateEngineeringSupport,
  deleteEngineeringSupport
} from "../controllers/engineeringSupportController.js";
import adminAuth from "../middlewares/adminAuth.js";
import upload from "../utils/upload.js";



const router = express.Router();

/* PUBLIC */

router.get("/public", getPublicEngineeringSupport);


/* ADMIN */

router.get("/admin", adminAuth, getAdminEngineeringSupport);

router.post(
  "/",
  adminAuth,
  upload.single("image"),
  createEngineeringSupport
);

router.put(
  "/:id",
  adminAuth,
  upload.single("image"),
  updateEngineeringSupport
);

router.delete(
  "/:id",
  adminAuth,
  deleteEngineeringSupport
);

export default router;