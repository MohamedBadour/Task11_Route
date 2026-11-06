import { User } from "../../DB/models/user.model.js";

export const getProfile = async (req, res) => {
  return res.status(200).json({ user: req.user });
};

// Admin only
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    return res.status(200).json({ count: users.length, users });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
