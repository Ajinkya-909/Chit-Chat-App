import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res, next) => {
  const { fullName, email, password } = req.body;
  try {
    if (password.length < 6) {
      return res
        .status(404)
        .json({ message: "Password must be at least 6 characters long" });
    }
    const user = await User.findOne({ email });

    if (user) {
      return res.status(404).json({ message: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassowrd = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassowrd,
    });

    if (newUser) {
      //Generate Token
      generateToken(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ message: "Invalid User" });
    }
  } catch (error) {
    console.log("Error in Signup controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = (req, res, next) => {
  res.send("login");
};
export const logout = (req, res, next) => {
  res.send("logout");
};
