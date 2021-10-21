const express = require('express')
const mailer = require('../scripts/mailer')
const { userInviteValidation } = require("../../resources/validation.js");

const router = express.Router();

router.post('/', async (req, res) => {
  const { error } = userInviteValidation({ emails: req.body.emails, subject: req.body.subject, messageBody: req.body.messageBody });
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    await mailer.sendUserInvite(req.body.emails, req.body.subject, req.body.messageBody, req.body.link)
    res
      .status(201)
      .json({
        code: 200,
        message: "Message sent successfully",
      });
  } catch (error) {
    return res
      .status(400)
      .json({ code: error.code, message: error.message, stack: error.stack });
  }
})

module.exports = router