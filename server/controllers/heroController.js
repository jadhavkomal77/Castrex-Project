import fs from "fs";
import Hero from "../models/Hero.js";
import cloudinary from "../utils/cloudinary.js";

/* ======================
   PUBLIC HERO
====================== */

export const getPublicHero = async (req, res) => {
  try {

    const hero = await Hero.findOne();

    res.json({
      success: true,
      hero
    });

  } catch {

    res.status(500).json({
      message: "Failed to load hero"
    });

  }
};


/* ======================
   ADMIN HERO
====================== */

export const getAdminHero = async (req, res) => {
  try {

    const hero = await Hero.findOne();

    res.json({
      success: true,
      hero
    });

  } catch {

    res.status(500).json({
      message: "Failed to load hero"
    });

  }
};


/* ======================
   CREATE / UPDATE HERO
====================== */

export const createOrUpdateHero = async (req, res) => {
  try {

    const { title, subtitle, buttonText, buttonLink } = req.body;

    let hero = await Hero.findOne();

    let imageUrl = hero?.image;

    /* IMAGE UPLOAD */

    if (req.file) {

      const uploaded = await cloudinary.uploader.upload(req.file.path,{
        folder:"hero"
      });

      imageUrl = uploaded.secure_url;

      fs.unlinkSync(req.file.path);
    }

    /* CREATE HERO */

    if (!hero) {

      hero = await Hero.create({
        title,
        subtitle,
        buttonText,
        buttonLink,
        image: imageUrl
      });

    } else {

      hero.title = title || hero.title;
      hero.subtitle = subtitle || hero.subtitle;
      hero.buttonText = buttonText || hero.buttonText;
      hero.buttonLink = buttonLink || hero.buttonLink;

      if (imageUrl) hero.image = imageUrl;

      await hero.save();
    }

    res.json({
      success: true,
      message: "Hero saved",
      hero
    });

  } catch (error) {

    res.status(500).json({
      message: "Hero update failed"
    });

  }
};


/* ======================
   DELETE HERO
====================== */

export const deleteHero = async (req, res) => {
  try {

    const hero = await Hero.findByIdAndDelete(req.params.id);

    if (!hero) {
      return res.status(404).json({
        message: "Hero not found"
      });
    }

    res.json({
      success: true,
      message: "Hero deleted"
    });

  } catch {

    res.status(500).json({
      message: "Hero delete failed"
    });

  }
};