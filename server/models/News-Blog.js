import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
{
title:{
type:String,
required:true
},
description:{
type:String
},
image:{
type:String
},
date:{
type:Date
}
},
{timestamps:true}
)

export default mongoose.model("News",newsSchema)