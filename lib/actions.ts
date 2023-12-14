"use server"

import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"
import { env } from "process"

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  })

  const mailOptions: Mail.Options = {
    from: env.NODEMAILER_EMAIL,
    to: env.NODEMAILER_EMAIL,
    subject: `Message from ${name} at ${email}`,
    text: message
  }

  try {
    await transport.sendMail(mailOptions)
    return [name, null]
    
  } catch (error) {
    return [null, error]
  }
}