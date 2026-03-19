import mongoose from "mongoose";

const engineeringSupportSchema = new mongoose.Schema(
{
  title: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  image: {
    type: String,
    default: ""
  },

  order: {
    type: Number,
    default: 0
  },

  isActive: {
    type: Boolean,
    default: true
  }
},
{ timestamps: true }
);

export default mongoose.model(
  "EngineeringSupport",
  engineeringSupportSchema
);