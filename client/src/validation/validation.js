const Joi = require("joi");
const { tldSet } = require("@/validation/tlds.js");

const eventRegistrationValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string()
      .alphanum()
      .min(2)
      .max(30)
      .required().messages({
        "string.base": `First Name should be a string`,
        "string.empty": `First Name cannot be left empty`,
        "string.min": `First Name should be at least {#limit} characters`,
        "string.max": `First Name should be under {#limit} characters`,
        "any.required": `First Name is a required field`,
      }),
    lastName: Joi.string()
      .alphanum()
      .min(2)
      .max(30)
      .required().messages({
        "string.base": `Last Name should be a string`,
        "string.empty": `Last Name cannot be left empty`,
        "string.min": `Last Name should be at least {#limit} characters`,
        "string.max": `Last Name should be under {#limit} characters`,
        "any.required": `Last Name is a required field`,
      }),
    email: Joi.string()
      .email({ tlds: { allow: tldSet } })
      .min(2)
      .max(30)
      .required().messages({
        "string.base": `Email should be a string`,
        "string.empty": `Email cannot be left empty`,
        "string.min": `Email should be at least {#limit} characters`,
        "string.max": `Email should be under {#limit} characters`,
        "any.required": `Email is a required field`,
      }),
    phoneNumber: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required().messages({
        "string.base": `Phone Number should be a string`,
        "string.empty": `Phone Number cannot be left empty`,
        "string.min": `Phone Number should be at least {#limit} characters`,
        "string.max": `Phone Number should be under {#limit} characters`,
        "any.required": `Phone Number is a required field`,
        "string.pattern.base": `Phone Number can only contain numbers`,
      }),
    attendeeInfo: Joi.string()
      .alphanum()
      .max(30)
      .allow("", null)
      .messages({
        "string.base": `Attendee Info should be a string`,
        "string.empty": `Attendee Info cannot be left empty`,
        "string.min": `Attendee Info should be at least {#limit} characters`,
        "string.max": `Attendee Info should be under {#limit} characters`,
        "any.required": `Attendee Info is a required field`,
      }),
  });
  return schema.validate(data, {
    abortEarly: false,
    errors: { label: "key", escapeHtml: true },
  });
};

// exporting this way allows us to access the functions directly. See /routes/auth.js
module.exports.eventRegistrationValidation = eventRegistrationValidation;
