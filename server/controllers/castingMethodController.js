import CastingMethod from "../models/CastingMethod.js"


export const getPublicCastingMethods = async(req,res)=>{

try{

const data = await CastingMethod.find({isActive:true}).sort({order:1})

res.json(data)

}catch{

res.status(500).json({message:"Failed"})
}

}


export const getAdminCastingMethods = async(req,res)=>{

const data = await CastingMethod.find().sort({order:1})

res.json(data)

}


export const createCastingMethod = async(req,res)=>{

const method = await CastingMethod.create(req.body)

res.json(method)

}


export const updateCastingMethod = async(req,res)=>{

const method = await CastingMethod.findByIdAndUpdate(
req.params.id,
req.body,
{new:true}
)

res.json(method)

}


export const deleteCastingMethod = async(req,res)=>{

await CastingMethod.findByIdAndDelete(req.params.id)

res.json({message:"Deleted"})
}