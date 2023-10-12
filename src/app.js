import express from "express";
import morgan from "morgan";
import cors from "cors";

import { json } from "express";
import Router from "./routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(json());
app.use(morgan("dev"));

app.use("/api", Router);

app.use(
  cors({
    origin: "http://localhost:5173",
    optionsSuccesState: 200,
    credentials: "include",
  })
);

export default app;
