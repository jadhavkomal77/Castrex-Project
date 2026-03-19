import mongoose from "mongoose";

const careerSchema = new mongoose.Schema({

hero:{
title:String,
subtitle:String,
image:String
},

whyJoin:[
{
icon:String,
title:String,
description:String
}
],

jobs:[
{
title:String,
department:String,
location:String,
description:String,
createdAt:{
type:Date,
default:Date.now
}
}
]

},{timestamps:true})

export default mongoose.model("Career",careerSchema)