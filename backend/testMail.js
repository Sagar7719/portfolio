import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const testMail = async () => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
      subject: 'Test Email',
      text: 'This is a test email to check nodemailer configuration.'
    });
    console.log('Email sent successfully:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

testMail();
