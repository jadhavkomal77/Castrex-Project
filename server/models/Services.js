import mongoose from "mongoose"

const serviceSchema = new mongoose.Schema({

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

status:{
type:Boolean,
default:true
}

},{timestamps:true})

export default mongoose.model("Service",serviceSchema)