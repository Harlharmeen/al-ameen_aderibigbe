import Order from "../models/Order.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const createOrder = async (req, res, next) => {
  try {
    const { name, email, service, budget, timeline, brief } = req.body;
    if (!name || !email || !service) {
      return res.status(400).json({ success: false, message: "Name, Email, and Service required" });
    }

    const order = await Order.create({ name, email, service, budget, timeline, brief });

    // send email notification
    await transporter.sendMail({
      from: `"Portfolio HireMe" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Hire Me Request: ${service}`,
      html: `
        <h2>New Hire Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Budget:</b> ${budget}</p>
        <p><b>Timeline:</b> ${timeline}</p>
        <p><b>Brief:</b> ${brief}</p>
      `,
    });

    res.status(201).json({ success: true, data: order });
  } catch (error) {
    next(error);
  }
};
