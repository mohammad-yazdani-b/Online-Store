import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import category from "./data/category.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get("/categories", (req, res) => {
  res.json(category);
});


app.listen(port, () => console.log(`app is run on port ${port}`));
