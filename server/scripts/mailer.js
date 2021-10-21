// MODULES
const path = require("path");
const nodemailer = require("nodemailer");
// MODELS
const Attendee = require("../models/Attendee.js");
const eventList = require("../../resources/events.json")
// SCRIPTS
const confirmationEmail = require("./confirmationEmail");
const userInviteEmail = require("./userInviteEmail");

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
const sendEventConfirmation = async (email, eventId) => {
  const event = eventList.find(event => event.id === eventId)

  const attendee = await Attendee.findOne({ email: email })

  try {
    await transporter.sendMail(
      {
        from: '"HumeOne" <team@humeone.com>',
        to: email,
        subject: `Registration Confirmation: ${event.name}`,
        html: confirmationEmail(attendee.firstName, event),
        attachments: [
          {
            filename: "humeone-email-banner.png",
            path: path.join(__dirname, "../../resources/humeone-email-banner.png"),
            cid: "humeone-email-banner",
          },
        ],
      },
      async (error, info) => {
        if (error) {
          return console.log("Mailer Error:", error);
        }
        return console.log("Message sent: " + info.response);
      }
    );
  } catch (error) {
    return console.log("Mailer Error:", error);
  }
};

const contactUs = async (name, email, subject, messageBody) => {
  try {
    await transporter.sendMail(
      {
        from: '"HumeOne" <team@humeone.com>',
        to: "humeoneteam@gmail.com",
        replyTo: email,
        subject: `Contact Form Submission | ${name}`,
        text: `
         From: ${name}
         Email: ${email}
         Subject: ${subject}

         Message:
         ${messageBody}
        `,
      },
      async (error, info) => {
        if (error) {
          return console.log("Mailer Error:", error);
        }
        return console.log("Message sent: " + info.response);
      }
    );
  } catch (error) {
    return console.log("Mailer Error:", error);
  }
};

const sendUserInvite = async (emails, subject, messageBody, link) => {
  emails.forEach(async function (email) {
    try {
      await transporter.sendMail(
        {
          from: '"HumeOne" <team@humeone.com>',
          to: email,
          subject: subject,
          html: userInviteEmail(messageBody, link),
          attachments: [
            {
              filename: "humeone-email-banner.png",
              path: path.join(__dirname, "../../resources/humeone-email-banner.png"),
              cid: "humeone-email-banner",
            },
          ],
        },
        async (error, info) => {
          if (error) {
            return console.log("Mailer Error:", error);
          }
          return console.log("Message sent: " + info.response);
        }
      );
    } catch (error) {
      return console.log("Mailer Error:", error);
    }
  })
};

module.exports.start = start;
module.exports.sendEventConfirmation = sendEventConfirmation;
module.exports.sendUserInvite = sendUserInvite;
module.exports.contactUs = contactUs;