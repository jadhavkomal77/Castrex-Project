import express from "express";

import {
  getPublicTopNavbar,
  getAdminTopNavbar,
  createTopNavbar,
  updateTopNavbar,
  deleteTopNavbar,
} from "../controllers/topNavbarController.js";

const router = express.Router();

router.get("/public", getPublicTopNavbar);
router.get("/admin", getAdminTopNavbar);

router.post("/create", createTopNavbar);
router.put("/update/:id", updateTopNavbar);
router.delete("/delete/:id", deleteTopNavbar);

export default router;