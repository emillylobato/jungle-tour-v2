import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import healthRoutes from "./routes/health.routes.js";

const app = express ();

app.use(helmet());
app.use(cors({ origin:"*"}));
app.use(morgan("dev"));
app.use(express.json());

app.use("/health", healthRoutes);

export default app;


