const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

const Message = require("./models/Message");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Email setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Route
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to DB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // Send email
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Portfolio Contact Message",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });

    res.status(200).json({ success: true });

  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));