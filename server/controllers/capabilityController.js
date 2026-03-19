
import Capability from "../models/CastingCapability.js"
import cloudinary from "../utils/cloudinary.js"
import fs from "fs"

/* ---------------- PUBLIC LIST ---------------- */

export const getPublicCapabilities = async (req,res)=>{
try{

const data = await Capability
.find({isActive:true})
.select("-seo -__v")
.sort({order:1})

res.status(200).json(data)

}catch(err){
console.error("PUBLIC LIST ERROR:",err)
res.status(500).json({message:"Failed to fetch capabilities"})
}
}

/* ---------------- PUBLIC DETAIL ---------------- */

export const getCapabilityDetail = async (req,res)=>{
try{

const item = await Capability.findOne({
slug:req.params.slug,
isActive:true
}).select("-seo -__v")

if(!item){
return res.status(404).json({message:"Capability not found"})
}

res.status(200).json(item)

}catch(err){
console.error("DETAIL ERROR:",err)
res.status(500).json({message:"Failed to fetch capability"})
}
}

/* ---------------- ADMIN LIST ---------------- */

export const getAdminCapabilities = async (req,res)=>{
try{

const data = await Capability.find().sort({order:1})
res.status(200).json(data)

}catch(err){
console.error("ADMIN LIST ERROR:",err)
res.status(500).json({message:"Admin fetch failed"})
}
}


/* ---------------- CREATE ---------------- */

export const createCapability = async (req,res)=>{
try{

/* SLUG CHECK */
const existing = await Capability.findOne({slug:req.body.slug})
if(existing){
return res.status(400).json({message:"Slug already exists"})
}

/* IMAGES */
let heroImage=""
let overviewImage=""

if(req.files?.heroImage){
const upload = await cloudinary.uploader.upload(
req.files.heroImage[0].path,
{folder:"capabilities"}
)
heroImage = upload.secure_url
fs.unlinkSync(req.files.heroImage[0].path)
}

if(req.files?.overviewImage){
const upload = await cloudinary.uploader.upload(
req.files.overviewImage[0].path,
{folder:"capabilities"}
)
overviewImage = upload.secure_url
fs.unlinkSync(req.files.overviewImage[0].path)
}

/* SECTIONS PARSE */
let sections=[]

if(req.body.sections){
sections = JSON.parse(req.body.sections)

/* 🔥 FIX STRUCTURE */
sections = sections.map(sec=>{

if(sec.sectionType==="features"){
return {
...sec,
items: (sec.items||[]).map(i=>({
title: i.title,
description: i.description || ""
}))
}
}

if(sec.sectionType==="process"){
return {
...sec,
steps: (sec.steps||[]).map((s,idx)=>({
step: Number(s.step) || idx+1,
title: s.title,
description: s.description || ""
}))
}
}

return sec
})
}

/* CREATE */

const data = await Capability.create({

title:req.body.title,
slug:req.body.slug,
icon:req.body.icon,
category:req.body.category,
order:Number(req.body.order) || 0,

hero:{
title:req.body.heroTitle,
subtitle:req.body.heroSubtitle,
description:req.body.heroDescription,
image:heroImage,
video:req.body.heroVideo
},

overview:{
title:req.body.overviewTitle,
description:req.body.overviewDescription,
image:overviewImage
},

sections,

seo:{
metaTitle:req.body.metaTitle,
metaDescription:req.body.metaDescription,
metaKeywords:req.body.metaKeywords
? req.body.metaKeywords.split(",").map(k=>k.trim())
: []
},

isActive:true

})

res.status(201).json(data)

}catch(err){
console.error("CREATE ERROR FULL:", err)
res.status(500).json({
message:"Create capability failed",
error:err.message
})
}
}
/* ---------------- UPDATE ---------------- */

export const updateCapability = async (req,res)=>{
try{

const item = await Capability.findById(req.params.id)
if(!item){
return res.status(404).json({message:"Capability not found"})
}

/* SAFETY OBJECTS */
if(!item.hero) item.hero={}
if(!item.overview) item.overview={}
if(!item.seo) item.seo={}

/* SLUG CHECK */
if(req.body.slug){
const existing = await Capability.findOne({
slug:req.body.slug,
_id:{ $ne:req.params.id }
})
if(existing){
return res.status(400).json({message:"Slug already exists"})
}
item.slug = req.body.slug
}

/* HERO IMAGE */
if(req.files?.heroImage){
const upload = await cloudinary.uploader.upload(
req.files.heroImage[0].path,
{folder:"capabilities"}
)
item.hero.image = upload.secure_url
fs.existsSync(req.files.heroImage[0].path) && fs.unlinkSync(req.files.heroImage[0].path)
}

/* OVERVIEW IMAGE */
if(req.files?.overviewImage){
const upload = await cloudinary.uploader.upload(
req.files.overviewImage[0].path,
{folder:"capabilities"}
)
item.overview.image = upload.secure_url
fs.existsSync(req.files.overviewImage[0].path) && fs.unlinkSync(req.files.overviewImage[0].path)
}

/* BASIC */
if(req.body.title) item.title = req.body.title
if(req.body.icon) item.icon = req.body.icon
if(req.body.category) item.category = req.body.category
if(req.body.order) item.order = Number(req.body.order)

/* HERO */
if(req.body.heroTitle) item.hero.title = req.body.heroTitle
if(req.body.heroSubtitle) item.hero.subtitle = req.body.heroSubtitle
if(req.body.heroDescription) item.hero.description = req.body.heroDescription
if(req.body.heroVideo) item.hero.video = req.body.heroVideo

/* OVERVIEW */
if(req.body.overviewTitle) item.overview.title = req.body.overviewTitle
if(req.body.overviewDescription) item.overview.description = req.body.overviewDescription

/* SECTIONS */
if(req.body.sections){
try{
item.sections = JSON.parse(req.body.sections)
}catch{
return res.status(400).json({message:"Invalid sections JSON"})
}
}

/* SEO */
if(req.body.metaTitle) item.seo.metaTitle = req.body.metaTitle
if(req.body.metaDescription) item.seo.metaDescription = req.body.metaDescription
if(req.body.metaKeywords){
item.seo.metaKeywords = req.body.metaKeywords.split(",").map(k=>k.trim())
}

/* ACTIVE */
if(req.body.isActive !== undefined){
item.isActive = req.body.isActive === "true" || req.body.isActive === true
}

await item.save()

res.status(200).json(item)

}catch(err){
console.error("UPDATE ERROR:",err)
res.status(500).json({message:"Update failed"})
}
}

/* ---------------- DELETE ---------------- */

export const deleteCapability = async (req,res)=>{
try{

const item = await Capability.findById(req.params.id)
if(!item){
return res.status(404).json({message:"Capability not found"})
}

await item.deleteOne()

res.status(200).json({message:"Deleted successfully"})

}catch(err){
console.error("DELETE ERROR:",err)
res.status(500).json({message:"Delete failed"})
}
}

//  **************************







// import Capability from "../models/Capability.js"
// import cloudinary from "../utils/cloudinary.js"
// import fs from "fs"

// /* ---------------- PUBLIC LIST ---------------- */

// export const getPublicCapabilities = async (req,res)=>{
// try{

// const data = await Capability
// .find({isActive:true})
// .sort({order:1})

// res.status(200).json(data)

// }catch(err){
// console.error(err)
// res.status(500).json({message:"Failed to fetch capabilities"})
// }
// }

// /* ---------------- PUBLIC DETAIL ---------------- */

// export const getCapabilityDetail = async (req,res)=>{
// try{

// const item = await Capability.findOne({
// slug:req.params.slug,
// isActive:true
// })

// if(!item){
// return res.status(404).json({message:"Capability not found"})
// }

// res.status(200).json(item)

// }catch(err){
// console.error(err)
// res.status(500).json({message:"Failed to fetch capability"})
// }
// }

// /* ---------------- ADMIN LIST ---------------- */

// export const getAdminCapabilities = async (req,res)=>{
// try{

// const data = await Capability
// .find()
// .sort({order:1})

// res.status(200).json(data)

// }catch(err){
// console.error(err)
// res.status(500).json({message:"Admin fetch failed"})
// }
// }

// /* ---------------- CREATE ---------------- */

// export const createCapability = async (req,res)=>{
// try{

// let heroImage=""
// let overviewImage=""

// /* HERO IMAGE */

// if(req.files?.heroImage){

// const upload = await cloudinary.uploader.upload(
// req.files.heroImage[0].path,
// {folder:"capabilities"}
// )

// heroImage = upload.secure_url

// fs.unlinkSync(req.files.heroImage[0].path)
// }

// /* OVERVIEW IMAGE */

// if(req.files?.overviewImage){

// const upload = await cloudinary.uploader.upload(
// req.files.overviewImage[0].path,
// {folder:"capabilities"}
// )

// overviewImage = upload.secure_url

// fs.unlinkSync(req.files.overviewImage[0].path)
// }

// /* PARSE JSON */

// let sections=[]

// if(req.body.sections){
// sections = JSON.parse(req.body.sections)
// }

// const data = await Capability.create({

// title:req.body.title,
// slug:req.body.slug,
// icon:req.body.icon,
// category:req.body.category,
// order:req.body.order,

// hero:{
// title:req.body.heroTitle,
// subtitle:req.body.heroSubtitle,
// description:req.body.heroDescription,
// image:heroImage,
// video:req.body.heroVideo
// },

// overview:{
// title:req.body.overviewTitle,
// description:req.body.overviewDescription,
// image:overviewImage
// },

// sections,

// seo:{
// metaTitle:req.body.metaTitle,
// metaDescription:req.body.metaDescription,
// metaKeywords:req.body.metaKeywords
// ? req.body.metaKeywords.split(",")
// : []
// },

// isActive:req.body.isActive

// })

// res.status(201).json(data)

// }catch(err){
// console.error(err)
// res.status(500).json({message:"Create capability failed"})
// }
// }

// /* ---------------- UPDATE ---------------- */

// export const updateCapability = async (req,res)=>{
// try{

// const item = await Capability.findById(req.params.id)

// if(!item){
// return res.status(404).json({message:"Capability not found"})
// }

// /* HERO IMAGE */

// if(req.files?.heroImage){

// const upload = await cloudinary.uploader.upload(
// req.files.heroImage[0].path,
// {folder:"capabilities"}
// )

// item.hero.image = upload.secure_url

// fs.unlinkSync(req.files.heroImage[0].path)
// }

// /* OVERVIEW IMAGE */

// if(req.files?.overviewImage){

// const upload = await cloudinary.uploader.upload(
// req.files.overviewImage[0].path,
// {folder:"capabilities"}
// )

// item.overview.image = upload.secure_url

// fs.unlinkSync(req.files.overviewImage[0].path)
// }

// /* BASIC */

// if(req.body.title) item.title = req.body.title
// if(req.body.slug) item.slug = req.body.slug
// if(req.body.icon) item.icon = req.body.icon
// if(req.body.category) item.category = req.body.category
// if(req.body.order) item.order = req.body.order

// /* HERO */

// if(req.body.heroTitle) item.hero.title = req.body.heroTitle
// if(req.body.heroSubtitle) item.hero.subtitle = req.body.heroSubtitle
// if(req.body.heroDescription) item.hero.description = req.body.heroDescription
// if(req.body.heroVideo) item.hero.video = req.body.heroVideo

// /* OVERVIEW */

// if(req.body.overviewTitle) item.overview.title = req.body.overviewTitle
// if(req.body.overviewDescription) item.overview.description = req.body.overviewDescription

// /* SECTIONS */

// if(req.body.sections){
// item.sections = JSON.parse(req.body.sections)
// }

// /* SEO */

// if(req.body.metaTitle) item.seo.metaTitle = req.body.metaTitle
// if(req.body.metaDescription) item.seo.metaDescription = req.body.metaDescription

// if(req.body.metaKeywords){
// item.seo.metaKeywords = req.body.metaKeywords.split(",")
// }

// /* ACTIVE */

// if(req.body.isActive!==undefined){
// item.isActive = req.body.isActive
// }

// await item.save()

// res.status(200).json(item)

// }catch(err){
// console.error(err)
// res.status(500).json({message:"Update failed"})
// }
// }

// /* ---------------- DELETE ---------------- */

// export const deleteCapability = async (req,res)=>{
// try{

// const item = await Capability.findById(req.params.id)

// if(!item){
// return res.status(404).json({message:"Capability not found"})
// }

// await item.deleteOne()

// res.status(200).json({message:"Deleted successfully"})

// }catch(err){
// console.error(err)
// res.status(500).json({message:"Delete failed"})
// }
// }
