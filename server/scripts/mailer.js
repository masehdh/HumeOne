// MODULES
const path = require("path");
const nodemailer = require("nodemailer");
// MODELS
const Attendee = require("../models/Attendee.js");
const eventList = require("../../resources/events.json")
// SCRIPTS
const confirmationEmail = require("./confirmationEmail");

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
  const event = process.env.NODE_ENV === "production"
    ? eventList.find(event => event.id === eventId) :
    eventList.find(event => event.testId === eventId)

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
module.exports.sendEventConfirmation = sendEventConfirmation;