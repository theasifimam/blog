import express from "express";
import mongoose from "mongoose";
import routes from "./src/routes/index.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
  });

// Mount the routes
app.use("/", routes);

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

