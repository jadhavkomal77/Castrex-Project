import express from "express"

import {
getPublicCastingMethods,
getAdminCastingMethods,
createCastingMethod,
updateCastingMethod,
deleteCastingMethod
} from "../controllers/castingMethodController.js"

const router = express.Router()

router.get("/public",getPublicCastingMethods)

router.get("/admin",getAdminCastingMethods)

router.post("/",createCastingMethod)

router.put("/:id",updateCastingMethod)

router.delete("/:id",deleteCastingMethod)

export default router