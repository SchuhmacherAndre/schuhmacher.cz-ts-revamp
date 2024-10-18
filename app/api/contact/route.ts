// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // Use TLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    // Do not fail on invalid certs
    rejectUnauthorized: false
  }
});

export async function POST(request: NextRequest) {
  try {
    const { name, company, email, message } = await request.json();

    // Validate the input
    if (!name || !company || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'me@schuhmacher.dev',
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Company: ${company}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}