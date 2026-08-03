import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import userroutes from "./Routes/user-routes.js";
import productroutes from "./Routes/product-routes.js";
import dashboardroutes from "./Routes/dashboard-routes.js";
import dashboardagentroutes from "./Routes/dashboardagent-routes.js";
import useraddressroutes from "./Routes/user-address-routes.js";
import visitCountRoutes from "./Routes/visit-count-routes.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
      "https://snk-shoe.onrender.com",
    ],
    credentials: true,
  }),
);
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/ecommerce/user", userroutes);
app.use("/ecommerce/product", productroutes);
app.use("/ecommerce/manager", dashboardroutes);
app.use("/ecommerce/agent", dashboardagentroutes);
app.use("/ecommerce/user-address", useraddressroutes);
app.use("/visitcount", visitCountRoutes);

export default app;
/*
import express,cors,bodyParser
import userroutes,productroutes,dashboardroutes,dashboardagentroutes,useraddressroutes,visitCountRoutes

app = express()

app.use bodyparser
app.use bodyparser.urlencoded
app.use express.json

app.use cors

app.get health

app.use userroutes
app.use productroutes
app.use dashboardroutes
app.use dashboardagentroutes
app.use useraddressroutes
app.use visitCountRoutes

export default app
*/
