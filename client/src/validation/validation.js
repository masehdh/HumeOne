const Joi = require("joi");
const { tldSet } = require("@/validation/tlds.js");

const eventRegistrationValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required().messages({
        "string.base": `Username should be a string`,
        "string.empty": `Username cannot be left empty`,
        "string.min": `Username should be at least {#limit} characters`,
        "string.max": `Username should be under {#limit} characters`,
        "any.required": `Username is a required field`,
        "string.pattern.base": `Username can only contain numbers, letters, spaces, or underscores`,
      }),
    name: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required().messages({
        "string.base": `Username should be a string`,
        "string.empty": `Username cannot be left empty`,
        "string.min": `Username should be at least {#limit} characters`,
        "string.max": `Username should be under {#limit} characters`,
        "any.required": `Username is a required field`,
        "string.pattern.base": `Username can only contain numbers, letters, spaces, or underscores`,
      }),
  });
  return schema.validate(data, {
    abortEarly: false,
    errors: { label: "key", escapeHtml: true },
  });
};

// exporting this way allows us to access the functions directly. See /routes/auth.js
module.exports.eventRegistrationValidation = eventRegistrationValidation;
