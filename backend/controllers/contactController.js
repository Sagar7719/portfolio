import Contact from '../models/Contact.js';
import nodemailer from 'nodemailer';

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Please provide all fields' });
    }

    // 1. Save to Database
    const newContact = await Contact.create({
      name,
      email,
      message,
    });

    // 2. Send Email Notification
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail', // You can change this if using another provider
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
        subject: `New Portfolio Message from ${name}`,
        text: `You have received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        replyTo: email,
      };

      transporter.sendMail(mailOptions).catch(emailError => {
        console.error('Error sending email:', emailError);
      });
    }

    res.status(201).json({ message: 'Message sent successfully!', data: newContact });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};
