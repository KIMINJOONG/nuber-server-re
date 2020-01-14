import Mailgun from "mailgun-js";

const mailgunClient = new Mailgun({
  apiKey: process.env.MAILGUN_PRIVATE_KEY || "",
  domain: "sandbox9a5a9f0a85f0431d88c12643de014447.mailgun.org"
});
