import mongoose from "mongoose";

const linkSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  { _id: true }
);

const topNavbarSchema = new mongoose.Schema(
  {
    links: {
      type: [linkSchema],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("TopNavbar", topNavbarSchema);