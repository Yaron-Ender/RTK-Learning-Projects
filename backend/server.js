import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/db.js";
//error handling
//routes

// import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
// import productRoutes from "./routes/productsRoutes.js";

dotenv.config();
connectDB(); //connect to DB

const port = process.env.PORT || 8000;

const app = express();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
