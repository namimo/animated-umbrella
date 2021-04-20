import nodemailer, { SendMailOptions } from "nodemailer"
import pino from "pino"

const transporter = nodemailer.createTransport(
  `smtps://${process.env.SMTP_EMAIL}:${process.env.SMTP_PASSWORD}@smtp.gmail.com`,
)

const sendMail = async ({ from, to, subject, html }: SendMailOptions) => {
  try {
    const mailOptions: SendMailOptions = {
      from: from || `"Reveur 👻" <${process.env.SMTP_EMAIL}>`,
      to,
      subject,
      html,
    }

    const info = await transporter.sendMail(mailOptions)
    pino().info(info)
  } catch (error) {
    pino().error(error)
  }
}

export default sendMail
