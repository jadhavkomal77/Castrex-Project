
import express from "express"

import {
getPublicCapabilities,
getCapabilityDetail,
getAdminCapabilities,
createCapability,
updateCapability,
deleteCapability
} from "../controllers/capabilityController.js"

import adminAuth from "../middlewares/adminAuth.js"
import upload from "../utils/upload.js"

const router = express.Router()

/* PUBLIC */

router.get("/public",getPublicCapabilities)

router.get("/detail/:slug",getCapabilityDetail)

/* ADMIN */

router.get("/admin",adminAuth,getAdminCapabilities)

router.post(
"/",
adminAuth,
upload.fields([
{name:"heroImage",maxCount:1},
{name:"overviewImage",maxCount:1}
]),
createCapability
)

router.put(
"/:id",
adminAuth,
upload.fields([
{name:"heroImage",maxCount:1},
{name:"overviewImage",maxCount:1}
]),
updateCapability
)

router.delete(
"/:id",
adminAuth,
deleteCapability
)

export default router