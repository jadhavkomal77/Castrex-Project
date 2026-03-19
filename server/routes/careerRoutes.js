import express from "express"

import {
getPublicCareer,
getAdminCareer,
updateHero,
addWhyJoin,
deleteWhyJoin,
addJob,
deleteJob,
updateWhyJoin,
updateJob
} from "../controllers/careerController.js"
import adminAuth from "../middlewares/adminAuth.js"
import upload from "../utils/upload.js"


const router = express.Router()



/* PUBLIC */

router.get("/public",getPublicCareer)



/* ADMIN */

router.get("/admin",adminAuth,getAdminCareer)



/* HERO */

router.post("/hero",
adminAuth,
upload.single("image"),
updateHero
)



/* WHY JOIN */

router.post("/why",adminAuth,addWhyJoin)

router.delete("/why/:id",adminAuth,deleteWhyJoin)



/* JOB */

router.post("/job",adminAuth,addJob)

router.delete("/job/:id",adminAuth,deleteJob)

router.put("/why/:id",adminAuth,updateWhyJoin)

router.put("/job/:id",adminAuth,updateJob)

export default router