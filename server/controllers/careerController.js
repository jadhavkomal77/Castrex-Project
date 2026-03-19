
import fs from "fs"
import Career from "../models/Career.js"
import cloudinary from "../utils/cloudinary.js"



/* =====================
PUBLIC CAREERS
===================== */

export const getPublicCareer = async(req,res)=>{

let career = await Career.findOne()

if(!career){

career = await Career.create({
hero:{},
whyJoin:[],
jobs:[]
})

}

res.json({
success:true,
career
})

}



/* =====================
ADMIN CAREERS
===================== */

export const getAdminCareer = async(req,res)=>{

let career = await Career.findOne()

if(!career){

career = await Career.create({
hero:{},
whyJoin:[],
jobs:[]
})

}

res.json({
success:true,
career
})

}



/* =====================
UPDATE HERO
===================== */

export const updateHero = async(req,res)=>{

const career = await Career.findOne()

let imageUrl = career.hero.image

if(req.file){

const result = await cloudinary.uploader.upload(req.file.path,{
folder:"careers"
})

imageUrl = result.secure_url

fs.unlinkSync(req.file.path)

}

career.hero = {
title:req.body.title,
subtitle:req.body.subtitle,
image:imageUrl
}

await career.save()

res.json({
success:true,
career
})

}



/* =====================
ADD WHY JOIN
===================== */

export const addWhyJoin = async(req,res)=>{

const career = await Career.findOne()

career.whyJoin.push(req.body)

await career.save()

res.json({
success:true,
career
})

}



/* =====================
DELETE WHY JOIN
===================== */

export const deleteWhyJoin = async(req,res)=>{

const career = await Career.findOne()

career.whyJoin = career.whyJoin.filter(
item => item._id.toString() !== req.params.id
)

await career.save()

res.json({
success:true
})

}



/* =====================
ADD JOB
===================== */

export const addJob = async(req,res)=>{

const career = await Career.findOne()

career.jobs.push(req.body)

await career.save()

res.json({
success:true,
career
})

}



/* =====================
DELETE JOB
===================== */

export const deleteJob = async(req,res)=>{

const career = await Career.findOne()

career.jobs = career.jobs.filter(
job => job._id.toString() !== req.params.id
)

await career.save()

res.json({
success:true
})

}


/* =====================
UPDATE WHY JOIN
===================== */

export const updateWhyJoin = async(req,res)=>{

const career = await Career.findOne()

const item = career.whyJoin.id(req.params.id)

item.icon = req.body.icon
item.title = req.body.title
item.description = req.body.description

await career.save()

res.json({
success:true,
career
})

}



/* =====================
UPDATE JOB
===================== */

export const updateJob = async(req,res)=>{

const career = await Career.findOne()

const job = career.jobs.id(req.params.id)

job.title = req.body.title
job.department = req.body.department
job.location = req.body.location
job.description = req.body.description

await career.save()

res.json({
success:true,
career
})

}