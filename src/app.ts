import express from "express";
import routes from "./routes";

const app = express();

app.use(express.json());

// 🔥 ENG MUHIM JOY
app.use(routes);

export default app;
