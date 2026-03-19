import mongoose from "mongoose";

const subMenuSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
    trim: true
  },
  link: {
    type: String,
    required: true,
    trim: true
  }
});

const menuSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
    trim: true
  },
  link: {
    type: String,
    required: true,
    trim: true
  },
  order: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  submenu: {
    type: [subMenuSchema],
    default: []
  }
});

const mainNavbarSchema = new mongoose.Schema({
  menu: {
    type: [menuSchema],
    default: []
  }
},{
  timestamps:true
});

export default mongoose.model("MainNavbar", mainNavbarSchema);