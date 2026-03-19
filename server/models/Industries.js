import mongoose from "mongoose";

const industrySchema = new mongoose.Schema(
{
name:{
type:String,
required:true
},
description:{
type:String
},
image:{
type:String
}
},
{timestamps:true}
)

export default mongoose.model("Industry",industrySchema)