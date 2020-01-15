import Mailgun from "mailgun-js";

const mailgunClient = new Mailgun({
  apiKey: process.env.MAILGUN_PRIVATE_KEY || "",
  domain: "sandbox9a5a9f0a85f0431d88c12643de014447.mailgun.org"
});

const sendEmail = (subject: string, html: string) => {
  const emailData = {
    from: "ijboym216@gmail.com",
    to: "ijboym216@gmail.com",
    subject,
    html
  };
  return mailgunClient.messages().send(emailData);
};

export const sendVerificationEmail = (fullName: string, key: string) => {
  const emailSubject = `Hello ${fullName}, please verify your email`;
  const emailBody = `Verify your email by clicking <a href="http://nuber.com/verification/${key}>here</a>`;
  return sendEmail(emailSubject, emailBody);
};
