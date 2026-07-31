import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import router from "./Routes/user-routes.js";
import routers from "./Routes/product-routes.js";
import routerss from "./Routes/dashboard-routes.js";
import routersss from "./Routes/dashboardagent-routes.js";
import routerAddress from "./Routes/user-address-routes.js";
import visitCountRoutes from "./Routes/visit-count-routes.js";

const app = express();

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://snk-shoe.onrender.com",
    ],
    credentials: true,
  }),
);

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/ecommerce/user", router);
app.use("/ecommerce/product", routers);
app.use("/ecommerce/manager", routerss);
app.use("/ecommerce/agent", routersss);
app.use("/ecommerce/user-address", routerAddress);
app.use("/visitcount", visitCountRoutes);

export default app;
