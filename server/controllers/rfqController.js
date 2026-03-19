import Rfq from "../models/Rfq.js";


/* CREATE RFQ */

export const createRfq = async(req,res)=>{
try{

const rfq = await Rfq.create(req.body)

res.status(201).json({
success:true,
rfq
})

}catch(error){

res.status(500).json({
success:false,
message:error.message
})

}
}



/* GET ALL RFQ */

export const getAllRfq = async(req,res)=>{
try{

const rfqs = await Rfq.find().sort({createdAt:-1})

res.json({
success:true,
rfqs
})

}catch(error){

res.status(500).json({
success:false,
message:error.message
})

}
}



/* GET SINGLE RFQ */

export const getSingleRfq = async(req,res)=>{
try{

const rfq = await Rfq.findById(req.params.id)

res.json({
success:true,
rfq
})

}catch(error){

res.status(500).json({
success:false,
message:error.message
})

}
}



/* UPDATE RFQ */

export const updateRfq = async(req,res)=>{
try{

const rfq = await Rfq.findByIdAndUpdate(
req.params.id,
req.body,
{new:true}
)

res.json({
success:true,
rfq
})

}catch(error){

res.status(500).json({
success:false,
message:error.message
})

}
}



/* DELETE RFQ */

export const deleteRfq = async(req,res)=>{
try{

await Rfq.findByIdAndDelete(req.params.id)

res.json({
success:true,
message:"RFQ Deleted"
})

}catch(error){

res.status(500).json({
success:false,
message:error.message
})

}
}