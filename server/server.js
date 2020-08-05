import express from "express";
import data from "./data";
import mongoose from "mongoose";
//import config from "./config";
require("dotenv").config();
import userRoute from "./routes/userRoute";

//const mongodbUrl = config.mongodbUrl;
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to dataBase"))
  .catch((err) => console.log("dataBase connection error", err));

const app = express();

app.use("/api/users", userRoute);

app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.products.find((x) => x._id === productId);
  if (product) res.send(product);
  else res.status(404).send({ msg: "Product Not Found" });
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`connected to port: ${PORT}`);
});
