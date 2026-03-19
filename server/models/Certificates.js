import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
{
title:{
type:String
},
image:{
type:String
}
},
{timestamps:true}
)

export default mongoose.model("Certificate",certificateSchema)