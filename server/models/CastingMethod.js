import mongoose from "mongoose"

const castingMethodSchema = new mongoose.Schema({

title:{
type:String,
required:true
},

description:{
type:String,
required:true
},

features:[
{
type:String
}
],

image:{
type:String
},

icon:{
type:String
},

order:{
type:Number,
default:0
},

isActive:{
type:Boolean,
default:true
}

},{timestamps:true})

export default mongoose.model("CastingMethod",castingMethodSchema)