import transporter from './transporter';

export const sendMail = async (
  email: string,
  subject: string,
  body: string,
): Promise<string> => {
  const mailOption = {
    to: email,
    subject: subject,
    html: body,
  };

  return new Promise((resolve, rejects) => {
    try {
      transporter.sendMail(mailOption, (error, info) => {
        console.log('transpoter.sendmail');
        if (error) {
          console.log(error);
          rejects(error);
        } else {
          console.log(info.response);
          resolve('Email Sent');
        }
      });
    } catch (error) {
      console.log(error);
    }
  });
};
