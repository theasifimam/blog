import nodemailer from "nodemailer";
import speakeasy from "speakeasy";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User.js";
import { createUserSchema } from "../utils/schema.js";

dotenv.config();

// Create a new user
export const createUser = async (req, res) => {
  try {
    const {
      fname,
      lname,
      username,
      mnumber,
      email,
      dob,
      gender,
      password,
      cpassword,
      role,
    } = req.body;

    // Validation logic -- Validate user input against the schema
    await createUserSchema.validate({
      fname,
      lname,
      username,
      mnumber,
      email,
      dob,
      gender,
      password,
      cpassword,
      role,
    });

    // Check if username, mobile number, and email already exist in the database
    const existingUser = await User.findOne({
      $or: [{ username: username }, { email: email }],
    });

    //  Unique User Validation
    if (existingUser) {
      if (existingUser.username === username) {
        return res.status(400).json({ message: "Username already exists" });
      } else if (existingUser.email === email) {
        return res.status(400).json({ message: "Email already exists" });
      } else {
        return res
          .status(400)
          .json({ message: "One or more fields already exist" });
      }
    }

    // Generate OTP code
    const secret = speakeasy.generateSecret({ length: 10 });
    const otpCode = speakeasy.totp({
      secret: secret.base32,
      encoding: "base32",
      window: 5 * 60, // 5 minutes in seconds
    });

    const mailOptions = {
      from: process.env.MAIL,
      to: email,
      subject: "Email Verification - OTP",
      html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:500px;overflow:auto;line-height:2">
      <div style="margin:50px auto;width:70%;padding:20px 0">
        <div style="border-bottom:1px solid #eee">
          <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">SocialBlog</a>
        </div>
        <p style="font-size:1.1em">Hi,</p>
        <p>Thank you for choosing Your Brand. Use the following OTP to complete your Sign Up procedures. OTP is valid for 5 minutes</p>
        <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otpCode}</h2>
        <p style="font-size:0.9em;">Regards,<br />SocialBlog</p>
        <hr style="border:none;border-top:1px solid #eee" />
        <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
          <p>SocialBlog</p>
          <p>Narayanpur, Sakri, Darbhanga - 847239</p>
          <p>Bihar, India</p>
        </div>
      </div>
    </div>
      `,
    };

    // Send OTP code to user's email
    const transporter = nodemailer.createTransport({
      service: "gmail", // e.g., Gmail, Outlook
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL, // "your_email_address",
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Failed to send OTP email" });
      }
      res.json({ message: "New OTP generated and sent to email" });
    });

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fname,
      lname,
      username,
      mnumber,
      email,
      dob,
      gender,
      password: hashedPassword,
      actualPassword: cpassword,
      role,
      otpSecret: secret.base32,
      otpCode,
    });

    const createdUser = await newUser.save();

    res.status(201).json({
      user: createdUser,
      message: "OTP sent to your mail successfully! 🫣",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Generate and send a new OTP code
export const generateNewOTP = async (req, res) => {
  try {
    const { username } = req.body;

    // Find the user by username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate a new OTP code
    const secret = speakeasy.generateSecret({ length: 10 });
    const otpCode = speakeasy.totp({
      secret: secret.base32,
      encoding: "base32",
      window: 5 * 60, // 5 minutes in seconds
    });

    // Update the user's OTP code and secret
    user.otpCode = otpCode;
    user.otpSecret = secret.base32;

    await user.save();

    // Send the new OTP code to the user's email
    const mailOptions = {
      from: process.env.MAIL,
      to: email,
      subject: "Email Verification - OTP",
      html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:500px;overflow:auto;line-height:2">
      <div style="margin:50px auto;width:70%;padding:20px 0">
        <div style="border-bottom:1px solid #eee">
          <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">SocialBlog</a>
        </div>
        <p style="font-size:1.1em">Hi,</p>
        <p>Thank you for choosing Your Brand. Use the following OTP to complete your Sign Up procedures. OTP is valid for 5 minutes</p>
        <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otpCode}</h2>
        <p style="font-size:0.9em;">Regards,<br />SocialBlog</p>
        <hr style="border:none;border-top:1px solid #eee" />
        <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
          <p>SocialBlog</p>
          <p>Narayanpur, Sakri, Darbhanga - 847239</p>
          <p>Bihar, India</p>
        </div>
      </div>
    </div>
      `,
    };

    // Send OTP code to user's email
    const transporter = nodemailer.createTransport({
      service: "gmail", // e.g., Gmail, Outlook
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL, // "your_email_address",
        pass: process.env.MAIL_PASS,
      },
    });

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Failed to send OTP email" });
      }
      res.json({ message: "New OTP generated and sent to given email" });
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Verify OTP code and generate token
export const verifyOTP = async (req, res) => {
  try {
    const { username, otpCode } = req.body;

    // Get the user from the database
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verify OTP code
    const verified = speakeasy.totp.verify({
      secret: user.otpSecret,
      encoding: "base32",
      token: otpCode,
      window: 5 * 60, // 5 minutes in seconds
    });

    if (verified) {
      // OTP code is valid
      user.isEmailVerified = true;
      await user.save();

      // Generate JWT token
      const token = jwt.sign(
        { userId: user._id, username: user.username },
        process.env.SECRET_KEY,
        { expiresIn: "30d" } // Set token expiration time
      );

      res.status(200).json({
        success: true,
        message: "User email verified successfully!",
        token, // Include the token in the response
        user,
      });
    } else {
      // Invalid OTP code
      res.json({ success: false, message: "Invalid OTP" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get a single user by ID
export const getUserById = async (req, res) => {
  try {
    const { username } = req.params;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update a user by ID
export const updateUserById = async (req, res) => {
  try {
    const { username } = req.params;
    const updatedUserData = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      username,
      updatedUserData,
      {
        new: true,
      }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a user by ID
export const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

