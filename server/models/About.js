import mongoose from "mongoose";

const statSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});

const aboutSchema = new mongoose.Schema(
  {
    headingSmall: {
      type: String,
      default: "ABOUT CASTREX",
    },

    title: {
      type: String,
      required: true,
    },

    description1: {
      type: String,
      required: true,
    },

    description2: {
      type: String,
    },

    image: {
      type: String,
      required: true,
    },

    stats: {
      type: [statSchema],
      default: [],
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("About", aboutSchema);