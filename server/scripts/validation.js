const Joi = require("joi");
const { tldSet } = require("./tlds");

const eventRegistrationValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string()
      .pattern(/^[a-zA-z'-]+$/)
      .min(2)
      .max(40)
      .required().messages({
        "string.base": `This field should be a string`,
        "string.empty": `This field cannot be left empty`,
        "string.min": `This field should be at least {#limit} characters`,
        "string.max": `This field should be under {#limit} characters`,
        "string.pattern.base": `This field can only contain letters`,
        "any.required": `This field is required`,
      }),
    lastName: Joi.string()
      .pattern(/^[a-zA-z'-]+$/)
      .min(2)
      .max(40)
      .required().messages({
        "string.base": `This field should be a string`,
        "string.empty": `This field cannot be left empty`,
        "string.min": `This field should be at least {#limit} characters`,
        "string.max": `This field should be under {#limit} characters`,
        "string.pattern.base": `This field can only contain letters`,
        "any.required": `This field is required`,
      }),
    email: Joi.string()
      .email({ tlds: { allow: tldSet } })
      .min(2)
      .max(30)
      .required().messages({
        "string.base": `This field should be a string`,
        "string.empty": `This field cannot be left empty`,
        "string.min": `This field should be at least {#limit} characters`,
        "string.max": `This field should be under {#limit} characters`,
        "any.required": `This field is required`,
        "string.email": `The email you entered appears to be invalid`
      }),
    gender: Joi.string()
      .pattern(/^[a-zA-z'-]+$/)
      .min(2)
      .max(40)
      .required().messages({
        "string.base": `This field should be a string`,
        "string.empty": `This field cannot be left empty`,
        "string.min": `This field should be at least {#limit} characters`,
        "string.max": `This field should be under {#limit} characters`,
        "string.pattern.base": `This field can only contain letters`,
        "any.required": `This field is required`,
      }),
    phoneNumber: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required().messages({
        "string.base": `This field should be a string`,
        "string.empty": `This field cannot be left empty`,
        "string.min": `This field should be at least {#limit} characters`,
        "string.max": `This field should be under {#limit} characters`,
        "any.required": `This field is required`,
        "string.pattern.base": `This field can only contain numbers`,
        "string.length": `Phone number should be 10-digits long`,
      }),
    attendeeInfo: Joi.string()
      .max(140)
      .allow("", null)
      .pattern(/^[a-zA-Z0-9.,!?:'"/-]+$/)
      .messages({
        "string.base": `This field should be a string`,
        "string.empty": `This field cannot be left empty`,
        "string.min": `This field should be at least {#limit} characters`,
        "string.max": `This field should be under {#limit} characters`,
        "any.required": `This field is required`,
        "string.pattern.base": `This field cannot contain special characters`,
      }),
  });
  return schema.validate(data, {
    abortEarly: false,
    errors: { label: "key", escapeHtml: true },
  });
};

// exporting this way allows us to access the functions directly. See /routes/auth.js
module.exports.eventRegistrationValidation = eventRegistrationValidation;