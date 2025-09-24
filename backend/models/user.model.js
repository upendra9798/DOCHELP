import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true, //  Important for uniqueness
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, //  Also should be unique
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profileImg: {
      type: String,
      default: "", 
    },
    coverImg: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
    userType: {
      type: String,
      enum: ["patient", "professional"],
      default: "patient",
    },
    specialization: {
      type: String,
      default: "",
    },
    licenseNumber: {
      type: String,
      default: "",
    },
    experience: {
      type: String,
      default: "",
    },
    newsletter: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // ✅ createdAt and updatedAt fields
  }
);

const User = mongoose.model("User", userSchema);

export default User;
