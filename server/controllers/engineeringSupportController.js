import EngineeringSupport from "../models/EngineeringSupport.js";
import cloudinary from "../utils/cloudinary.js";
import fs from "fs";


/* PUBLIC */

export const getPublicEngineeringSupport = async (req, res) => {
  try {

    const data = await EngineeringSupport.find({ isActive: true })
      .sort({ order: 1 });

    res.json(data);

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch engineering support"
    });

  }
};


/* ADMIN */

export const getAdminEngineeringSupport = async (req, res) => {
  try {

    const data = await EngineeringSupport.find()
      .sort({ order: 1 });

    res.json(data);

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch engineering support"
    });

  }
};


/* CREATE */

export const createEngineeringSupport = async (req, res) => {

  try {

    let imageUrl = "";

    if (req.file) {

      const upload = await cloudinary.uploader.upload(
        req.file.path,
        { folder: "engineering-support" }
      );

      imageUrl = upload.secure_url;

      fs.unlinkSync(req.file.path);
    }

    const item = await EngineeringSupport.create({

      title: req.body.title,
      description: req.body.description,
      image: imageUrl,
      order: req.body.order || 0

    });

    res.status(201).json(item);

  } catch (error) {

    res.status(500).json({
      message: "Create failed"
    });

  }
};


/* UPDATE */

export const updateEngineeringSupport = async (req, res) => {

  try {

    const item = await EngineeringSupport.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        message: "Engineering support not found"
      });
    }

    if (req.file) {

      const upload = await cloudinary.uploader.upload(
        req.file.path,
        { folder: "engineering-support" }
      );

      item.image = upload.secure_url;

      fs.unlinkSync(req.file.path);
    }

    item.title = req.body.title || item.title;
    item.description = req.body.description || item.description;
    item.order = req.body.order || item.order;

    item.isActive =
      req.body.isActive !== undefined
        ? req.body.isActive
        : item.isActive;

    await item.save();

    res.json(item);

  } catch (error) {

    res.status(500).json({
      message: "Update failed"
    });

  }
};


/* DELETE */

export const deleteEngineeringSupport = async (req, res) => {

  try {

    const item = await EngineeringSupport.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        message: "Engineering support not found"
      });
    }

    await item.deleteOne();

    res.json({
      message: "Engineering support deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: "Delete failed"
    });

  }
};