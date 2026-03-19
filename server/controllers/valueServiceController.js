import ValueService from "../models/ValueService.js";
import cloudinary from "../utils/cloudinary.js";
import fs from "fs";

/* PUBLIC */

export const getPublicValueServices = async (req, res) => {
  try {

    const services = await ValueService.find({ isActive: true })
      .sort({ order: 1 });

    res.json(services);

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch value services"
    });

  }
};


/* ADMIN */

export const getAdminValueServices = async (req, res) => {
  try {

    const services = await ValueService.find()
      .sort({ order: 1 });

    res.json(services);

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch value services"
    });

  }
};


/* CREATE */

export const createValueService = async (req, res) => {

  try {

    let imageUrl = "";

    if (req.file) {

      const upload = await cloudinary.uploader.upload(
        req.file.path,
        { folder: "value-services" }
      );

      imageUrl = upload.secure_url;

      fs.unlinkSync(req.file.path);
    }

    const service = await ValueService.create({

      title: req.body.title,
      description: req.body.description,
      icon: req.body.icon,
      image: imageUrl,
      order: req.body.order || 0

    });

    res.status(201).json(service);

  } catch (error) {

    res.status(500).json({
      message: "Create failed"
    });

  }
};


/* UPDATE */

export const updateValueService = async (req, res) => {

  try {

    const service = await ValueService.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        message: "Value service not found"
      });
    }

    if (req.file) {

      const upload = await cloudinary.uploader.upload(
        req.file.path,
        { folder: "value-services" }
      );

      service.image = upload.secure_url;

      fs.unlinkSync(req.file.path);
    }

    service.title = req.body.title || service.title;
    service.description = req.body.description || service.description;
    service.icon = req.body.icon || service.icon;
    service.order = req.body.order || service.order;

    service.isActive =
      req.body.isActive !== undefined
        ? req.body.isActive
        : service.isActive;

    await service.save();

    res.json(service);

  } catch (error) {

    res.status(500).json({
      message: "Update failed"
    });

  }
};


/* DELETE */

export const deleteValueService = async (req, res) => {

  try {

    const service = await ValueService.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        message: "Value service not found"
      });
    }

    await service.deleteOne();

    res.json({
      message: "Value service deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: "Delete failed"
    });

  }
};