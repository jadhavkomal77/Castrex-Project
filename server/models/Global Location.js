import mongoose from "mongoose";

const locationSchema = new mongoose.Schema(
{
country:{
type:String,
required:true
},
city:{
type:String
},
address:{
type:String
},
mapLink:{
type:String
}
},
{timestamps:true}
)

export default mongoose.model("Location",locationSchema)