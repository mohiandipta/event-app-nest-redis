import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  service: 'Gmail',

  auth: {
    user: '',
    pass: '',
  },
});

export default transporter;
