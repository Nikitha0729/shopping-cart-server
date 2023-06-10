import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import router from "./Router/Cart.Router.js";

mongoose
  .connect(
    "mongodb+srv://vinitha:6nEye3eS1xaCOyvI@cluster0.28ve347.mongodb.net/vinitha?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Failed to connect to MongoDB:", error));

const corsOptions = {
  origin: "http://localhost:4200",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use("/api", router);

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
