import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "user",
  },
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isEmailVerified: { type: Boolean, default: false },
  mnumber: String,
  password: String,
  actualPassword: String,
  token: String,
  gender: String,
  dob: Date,
  otpSecret: String,
  otpCode: String,
  followings: [String],
  followers: [String],
  images: String,
});

const User = mongoose.model("User", userSchema);

export default User;

