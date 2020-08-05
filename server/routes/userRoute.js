import express from "express";
import eMarket from "../models/userModel";

const router = express.Router();

router.get("/createadmin", async (req, res) => {
  try {
    const user = new eMarket({
      name: "Kazeem",
      email: "erinfolamibolaji@gmail.com",
      password: "1234",
      isAdmin: false,
    });

    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.send({ msg: error.message });
  }
});

export default router;
