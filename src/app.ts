import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

// CORS — eng birinchi middleware bo'lishi SHART
app.use(
  cors({
    origin: [
      "https://base55.org.ru",
      "https://base55-91425.web.app",
      "https://base55-91425.firebaseapp.com",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "x-user-uid"],
  })
);

app.use(express.json());

app.use(routes);

export default app;
