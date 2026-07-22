import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

import router from "./Routes/user-routes.js";
import routers from "./Routes/product-routes.js";
import routerss from "./Routes/dashboard-routes.js";
import routersss from "./Routes/dashboardagent-routes.js";
import routerAddress from "./Routes/user-address-routes.js";
import visitCountRoutes from "./Routes/visit-count-routes.js";

const app = express();

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(
  cors({
    origin: ["http://localhost:5173", "https://snk-shoe.onrender.com"],
    credentials: true,
  }),
);
app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/ecommerce/user", router);
app.use("/ecommerce/product", routers);
app.use("/ecommerce/manager", routerss);
app.use("/ecommerce/agent", routersss);
app.use("/ecommerce/user-address", routerAddress);
app.use("/visitcount", visitCountRoutes);

const port = Number(process.env.PORT || 5000);
const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  console.error("Missing MONGO_URI in environment variables.");
  process.exit(1);
}

const startServer = async () => {
  try {
    await mongoose.connect(mongoUri);
    app.listen(port, () => {
      console.log(`connected to db at port ${port} :)`);
    });
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

startServer();
