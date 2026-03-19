import express from "express";
import {
createRfq,
getAllRfq,
getSingleRfq,
updateRfq,
deleteRfq
} from "../controllers/rfqController.js";

import adminAuth from "../middlewares/adminAuth.js";

const router = express.Router();


/* PUBLIC */

router.post("/create",createRfq)


/* ADMIN */

router.get("/admin",adminAuth,getAllRfq)

router.get("/admin/:id",adminAuth,getSingleRfq)

router.put("/admin/:id",adminAuth,updateRfq)

router.delete("/admin/:id",adminAuth,deleteRfq)


export default router;