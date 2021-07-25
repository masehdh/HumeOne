const Joi = require("joi");

const registerValidation = (data) => {
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
    email: Joi.string()
      .min(6)
      .required().messages({
        "string.base": `Password should be a string`,
        "string.empty": `Password cannot be left empty`,
        "string.min": `Password should be at least {#limit} characters`,
        "string.max": `Password should be under {#limit} characters`,
        "any.required": `Password is a required field`,
        "string.pattern.base": `Password can only contain numbers, letters, spaces, or underscores`,
      }),
    phoneNumber: Joi.string().min(9).max(10).pattern(/^[0-9]+$/).messages({
      "string.base": `Phone Number should be a string`,
      "string.empty": `Phone Number cannot be left empty`,
      "string.min": `Phone Number should be at least {#limit} digits`,
      "string.max": `Phone Number should be under {#limit} digits`,
      "string.pattern.base": `Phone Number can only contain numbers.`,
    })
  }),
  return schema.validate(data, {
    abortEarly: false,
    errors: { label: "key", escapeHtml: true },
  });
};

module.exports.registerValidation = registerValidation;
