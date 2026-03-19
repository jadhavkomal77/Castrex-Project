import MainNavbar from "../models/MainNavbar.js";
import { body, validationResult } from "express-validator";

/* =====================
   VALIDATION
===================== */

export const validateMainNavbar = [

  body("menu")
    .isArray({ min: 1 })
    .withMessage("Menu must contain at least one item"),

  body("menu.*.label")
    .notEmpty()
    .trim()
    .withMessage("Menu label is required"),

  body("menu.*.link")
    .notEmpty()
    .trim()
    .withMessage("Menu link is required"),

  body("menu.*.submenu.*.label")
    .optional()
    .notEmpty()
    .withMessage("Submenu label required"),

  body("menu.*.submenu.*.link")
    .optional()
    .notEmpty()
    .withMessage("Submenu link required")

];


/* =====================
   PUBLIC NAVBAR
===================== */

export const getPublicMainNavbar = async (req,res)=>{

  try{

    const navbar = await MainNavbar.findOne();

    if(!navbar){
      return res.json({
        success:true,
        menu:[]
      });
    }

    const activeMenu = navbar.menu
      .filter(item=>item.isActive)
      .sort((a,b)=>a.order-b.order);

    res.json({
      success:true,
      menu:activeMenu
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:"Failed to fetch navbar"
    });

  }

};


/* =====================
   ADMIN NAVBAR
===================== */

export const getAdminMainNavbar = async (req,res)=>{

  try{

    const navbar = await MainNavbar.findOne();

    res.json({
      success:true,
      navbar
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:"Failed to fetch navbar"
    });

  }

};


/* =====================
   CREATE NAVBAR
===================== */

export const createMainNavbar = async (req,res)=>{

  try{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
      return res.status(400).json({
        success:false,
        errors:errors.array()
      });
    }

    const existingNavbar = await MainNavbar.findOne();

    if(existingNavbar){
      return res.status(400).json({
        success:false,
        message:"Navbar already exists. Use update instead."
      });
    }

    const navbar = await MainNavbar.create(req.body);

    res.status(201).json({
      success:true,
      navbar
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }

};


/* =====================
   UPDATE NAVBAR
===================== */

export const updateMainNavbar = async (req,res)=>{

  try{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
      return res.status(400).json({
        success:false,
        errors:errors.array()
      });
    }

    const navbar = await MainNavbar.findByIdAndUpdate(
      req.params.id,
      { $set:req.body },
      { new:true }
    );

    if(!navbar){
      return res.status(404).json({
        success:false,
        message:"Navbar not found"
      });
    }

    res.json({
      success:true,
      navbar
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }

};


/* =====================
   DELETE NAVBAR
===================== */

export const deleteMainNavbar = async (req,res)=>{

  try{

    const navbar = await MainNavbar.findByIdAndDelete(req.params.id);

    if(!navbar){
      return res.status(404).json({
        success:false,
        message:"Navbar not found"
      });
    }

    res.json({
      success:true,
      message:"Navbar deleted"
    });

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }

};