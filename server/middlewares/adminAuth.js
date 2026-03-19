// import jwt from "jsonwebtoken";
// import Admin from "../models/Admin.js";

// const JWT_SECRET = process.env.JWT_KEY;

// const adminAuth = async (req, res, next) => {
//   try {
//     const token = req.cookies?.adminToken;

//     if (!token) {
//       return res.status(401).json({ message: "Login required" });
//     }

//     const decoded = jwt.verify(token, JWT_SECRET);

//     const admin = await Admin.findById(decoded.id).select("-password");
//     if (!admin) {
//       return res.status(401).json({ message: "Admin not found" });
//     }

//     req.user = { id: admin._id };
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };

// export default adminAuth;




import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

const adminAuth = async (req, res, next) => {
  try {

    const token = req.cookies?.adminToken;

    if (!token) {
      return res.status(401).json({
        success:false,
        message:"Authentication required"
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_KEY);

    const admin = await Admin.findById(decoded.id).select("-password");

    if (!admin) {
      return res.status(401).json({
        message:"Admin not found"
      });
    }

    req.user = {
      id: admin._id
    };

    next();

  } catch (error) {

    return res.status(401).json({
      message:"Invalid token"
    });

  }
};

export default adminAuth;