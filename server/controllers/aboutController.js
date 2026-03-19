import fs from "fs";
import About from "../models/About.js";
import cloudinary from "../utils/cloudinary.js";

/* 🌍 PUBLIC */

export const getPublicAbout = async (req, res) => {
  try {

    const about = await About.findOne();

    res.json(about);

  } catch (err) {

    res.status(500).json({
      message: "Failed to load about section"
    });

  }
};
/* 🔐 ADMIN GET */

export const getAdminAbout = async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about);
  } catch (err) {
    res.status(500).json({ message: "Failed to load about section" });
  }
};

/* 🔐 CREATE / UPDATE */

export const saveAbout = async (req, res) => {
  try {

    const {
      headingSmall,
      title,
      description1,
      description2,
      stats
    } = req.body;

    let imageUrl;

    if (req.file) {

      const uploadRes = await cloudinary.uploader.upload(req.file.path, {
        folder: "about"
      });

      imageUrl = uploadRes.secure_url;

      fs.unlinkSync(req.file.path);

    }

    let parsedStats = [];

    if (stats) {

      parsedStats =
        typeof stats === "string"
          ? JSON.parse(stats)
          : stats;

    }

    let about = await About.findOne();

    if (about) {

      about.headingSmall = headingSmall;
      about.title = title;
      about.description1 = description1;
      about.description2 = description2;

      about.isActive = true;

      if (parsedStats.length > 0) {
        about.stats = parsedStats;
      }

      if (imageUrl) {
        about.image = imageUrl;
      }

      await about.save();

    } else {

      about = await About.create({
        headingSmall,
        title,
        description1,
        description2,
        image: imageUrl,
        stats: parsedStats,
        isActive: true
      });

    }

    res.json({
      message: "About updated",
      about
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Failed to update about"
    });

  }
};