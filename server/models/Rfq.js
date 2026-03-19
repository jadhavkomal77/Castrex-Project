import mongoose from "mongoose";

const rfqSchema = new mongoose.Schema({

  company:{
    type:String
  },

  name:{
    type:String,
    required:true
  },

  email:{
    type:String,
    required:true
  },

  phone:{
    type:String,
    required:true
  },

  componentType:{
    type:String,
    required:true
  },

  annualVolume:{
    type:String
  },

  projectDetails:{
    type:String,
    required:true
  },

  createdBy:{
    type:String,
    default:"customer"
  }

},{timestamps:true});

export default mongoose.model("Rfq",rfqSchema);