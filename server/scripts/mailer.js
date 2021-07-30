// MODULES
const path = require("path");
const nodemailer = require("nodemailer");
// SCRIPTS
const newsletter_template = require("./newsletter_template");

// INITIALIZER FOR MAILER
const start = () =>
  nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAILUSER,
      pass: process.env.MAILPASS,
    },
  });

// SEND NEWSLETTER
const send = async (newsletterName) => {
  try {
    await transporter.sendMail(
      {
        from: '"HumeOne" <team@humeone.com>',
        to: "maseh46@gmail.com",
        subject: "subject",
        html: newsletter_template(
        ),
        attachments: [
          {
            filename: "humeone-logo.png",
            path: path.join(__dirname, "../../client/src/assets/humeone-logo.png"),
            cid: "humeone-logo",
          },
        ],
      },
      async (error, info) => {
        if (error) {
          return error;
        }
        return "Message sent: " + info.response;
      }
    );
  } catch (error) {
    return error;
  }
};

// SEND TEST NEWSLETTER.

module.exports.start = start;
module.exports.send = send;