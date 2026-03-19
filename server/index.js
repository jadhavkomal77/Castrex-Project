import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import fs from "fs";

// ROUTES
import adminRoutes from "./routes/adminRoute.js";
import contactRoutes from "./routes/contactRoutes.js";
import mainNavbarRoutes from "./routes/mainNavbarRoutes.js";
import topNavbarRoutes from "./routes/topNavbarRoutes.js";
import heroRoutes from "./routes/heroRoutes.js";
import capabilityRoutes from "./routes/capabilityRoutes.js";
import castingMethodRoutes from "./routes/castingMethodRoutes.js";
import footerRoutes from "./routes/footerRoutes.js";
import aboutRoutes from "./routes/aboutRoutes.js";
import rfqRoutes from "./routes/rfqRoutes.js";
import valueServiceRoutes from "./routes/valueServiceRoutes.js";
import careerRoutes from "./routes/careerRoutes.js";
import engineeringSupportRoutes from "./routes/engineeringSupportRoutes.js";

const app = express();
const __dirname = path.resolve();

// ✅ MIDDLEWARE
app.use(cookieParser());
app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
  "https://castrex-project-c.vercel.app", 
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

// ✅ ROUTES
app.use("/api/admin", adminRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/top-navbar", topNavbarRoutes);
app.use("/api/main-navbar", mainNavbarRoutes);
app.use("/api/hero", heroRoutes);
app.use("/api/capabilities", capabilityRoutes);
app.use("/api/value-services", valueServiceRoutes);
app.use("/api/engineering-support", engineeringSupportRoutes);
app.use("/api/rfq", rfqRoutes);
app.use("/api/careers", careerRoutes);
app.use("/api/casting-methods", castingMethodRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/footer", footerRoutes);


app.get("/", (req, res) => {
  res.json("Server is Running 🚀");
});


if (process.env.NODE_ENV === "production") {
  const distPath = path.join(__dirname, "dist");

  if (fs.existsSync(distPath)) {
    app.use(express.static(distPath));

    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }
}

// ✅ PORT
const PORT = process.env.PORT || 5000;

// ❌ ENV CHECK
if (!process.env.MONGO_URL) {
  console.error("❌ MONGO_URL missing!");
  process.exit(1);
}


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB Connected");


    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Error:", err);
    process.exit(1);
  });

export default app;