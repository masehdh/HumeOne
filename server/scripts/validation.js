const Joi = require("joi");
const { tldSet } = require("./tlds.js");

const signUpValidation = (data) => {
  const schema = Joi.object({
    eventId: Joi.string(),
    firstName: Joi.string()
      .pattern(/^[a-zA-z'-]+$/)
      .min(2)
      .max(40)
      .required()
      .messages({
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
      .required()
      .messages({
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
      .required()
      .messages({
        "string.base": `This field should be a string`,
        "string.empty": `This field cannot be left empty`,
        "string.min": `This field should be at least {#limit} characters`,
        "string.max": `This field should be under {#limit} characters`,
        "any.required": `This field is required`,
        "string.email": `The email you entered appears to be invalid`,
      }),
    city: Joi.string()
      .pattern(/^[a-zA-z'-, ]+$/)
      .min(2)
      .required()
      .messages({
        "string.base": `This field should be a string`,
        "string.empty": `This field cannot be left empty`,
        "string.min": `This field should be at least {#limit} characters`,
        "string.pattern.base": `This field cannot contain special characters`,
        "any.required": `This field is required`,
      }),
    gender: Joi.string()
      .pattern(/^[a-zA-z'-]+$/)
      .min(2)
      .max(40)
      .required()
      .messages({
        "string.base": `This field should be a string`,
        "string.empty": `This field cannot be left empty`,
        "string.min": `This field should be at least {#limit} characters`,
        "string.max": `This field should be under {#limit} characters`,
        "string.pattern.base": `This field can only contain letters`,
        "any.required": `This field is required`,
      }),
    ageGroup: Joi.any()
      .valid("18-24", "25-34", "35+")
      .required()
      .messages({
        "any.only": `This field cannot be left empty`,
        "any.empty": `This field cannot be left empty`,
        "any.required": `This field cannot be left empty`,
      }),
    phoneNumber: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required()
      .messages({
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
    preferredAgeGroup: Joi.array()
      .items(
      Joi.any().valid("18-24", "25-34", "35+",""))
      .messages({
        "any.only": `You can only choose between the three provided options`,
      }),
    interests: Joi.array()
      .items(
        Joi.any().valid(
          "Sports",
          "Basketball",
          "Soccer",
          "Volleyball",
          "Nature",
          "Hiking",
          "Bonfire",
          "Biking",
          "Networking",
          "Tech",
          "Policy",
          "Food",
          "Restaurant Dinner",
          "Potluck",
          "Learning Experiences",
          "Personal Development",
          "Skillsharing",
          "Coding",
          ""
        )
      )
      .messages({
        "any.only": `You can only choose between the provided options`,
      }),
    availability: Joi.array()
      .items(
        Joi.any().valid(
          "Weekday mornings (9-12)",
          "Weekday afternoons (12-5)",
          "Weekday evenings (5-10)",
          "Weekend mornings (9-12)",
          "Weekend afternoons (12-5)",
          "Weekend evenings (5-10)",
          ""
        )
      )
      .messages({
        "any.only": `You can only choose between the provided options`,
      }),
  });
  return schema.validate(data, {
    abortEarly: false,
    errors: { label: "key", escapeHtml: true },
  });
};
// exporting this way allows us to access the functions directly. See /routes/auth.js
module.exports.signUpValidation = signUpValidation;