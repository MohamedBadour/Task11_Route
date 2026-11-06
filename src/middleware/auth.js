import jwt from "jsonwebtoken";
import { User } from "../DB/models/user.model.js";

export const auth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization?.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Token is required." });
    }
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "saraha_secret_key");
    const user = await User.findById(decoded.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found." });

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};

export const allowTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access forbidden: insufficient permissions." });
    }
    next();
  };
};
