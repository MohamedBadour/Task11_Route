import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String }, // optional for google provider
    phone: { type: String },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    provider: { type: String, enum: ["system", "google"], default: "system" },
    isConfirmed: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const User = model("User", userSchema);
