import TopNavbar from "../models/TopNavbar.js";

/* PUBLIC */
export const getPublicTopNavbar = async (req, res) => {
  try {
    const navbar = await TopNavbar.findOne();
    res.json(navbar);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch navbar" });
  }
};

/* ADMIN */
export const getAdminTopNavbar = async (req, res) => {
  try {
    const navbar = await TopNavbar.findOne();
    res.json(navbar);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch navbar" });
  }
};

/* CREATE */
export const createTopNavbar = async (req, res) => {
  try {
    const navbar = await TopNavbar.create(req.body);

    res.status(201).json({
      success: true,
      navbar,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* UPDATE */
export const updateTopNavbar = async (req, res) => {
  try {
    const navbar = await TopNavbar.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!navbar) {
      return res.status(404).json({
        message: "Navbar not found",
      });
    }

    res.json({
      success: true,
      navbar,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* DELETE */
export const deleteTopNavbar = async (req, res) => {
  try {
    const navbar = await TopNavbar.findByIdAndDelete(req.params.id);

    if (!navbar) {
      return res.status(404).json({
        message: "Navbar not found",
      });
    }

    res.json({
      success: true,
      message: "Navbar deleted",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};