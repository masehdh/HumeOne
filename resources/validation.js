const Joi = require("joi");
const { tldSet } = require("./tlds");
const interestCategories = require("./interests.json");
const availabilityCategories = require("./availability.json");
let eventTagCategories = require("./eventTags.json")
eventTagCategories = eventTagCategories.map(({ tag }) => tag)

let maxBirthdate = new Date(new Date().setFullYear(new Date().getFullYear() - 18))
let minBirthdate = new Date(new Date().setFullYear(new Date().getFullYear() - 100))

const emailValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: tldSet } })
      .min(3)
      .max(60)
      .required()
      .messages({
        "string.base": `This field should be a string`,
        "string.empty": `This field is required`,
        "string.min": `This field should be at least {#limit} characters`,
        "string.max": `This field should be under {#limit} characters`,
        "any.required": `This field is required`,
        "string.email": `The email you entered appears to be invalid`,
      }),
  });
  return schema.validate(data, {
    abortEarly: false,
    errors: { label: "key", escapeHtml: true },
  });
};

const registrationValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string()
      .pattern(/^[ a-zA-ZÀ-ÿ'-]+$/)
      .min(2)
      .max(40)
      .required()
      .messages({
        "string.base": `This field should be a string`,
        "string.empty": `This field is required`,
        "string.min": `This field should be at least {#limit} characters`,
        "string.max": `This field should be under {#limit} characters`,
        "string.pattern.base": `This field can only contain letters`,
        "any.required": `This field is required`,
      }),
    lastName: Joi.string()
      .pattern(/^[ a-zA-ZÀ-ÿ'-]+$/)
      .min(2)
      .max(40)
      .required()
      .messages({
        "string.base": `This field should be a string`,
        "string.empty": `This field is required`,
        "string.min": `This field should be at least {#limit} characters`,
        "string.max": `This field should be under {#limit} characters`,
        "string.pattern.base": `This field can only contain letters`,
        "any.required": `This field is required`,
      }),
    email: Joi.string()
      .email({ tlds: { allow: tldSet } })
      .min(3)
      .max(60)
      .required()
      .messages({
        "string.base": `This field should be a string`,
        "string.empty": `This field is required`,
        "string.min": `This field should be at least {#limit} characters`,
        "string.max": `This field should be under {#limit} characters`,
        "any.required": `This field is required`,
        "string.email": `The email you entered appears to be invalid`,
      }),
    over18: Joi.boolean().valid(true).required().messages({
      "any.only": `You must be 18 years old or over to register for events`,
    })
  });
  return schema.validate(data, {
    abortEarly: false,
    errors: { label: "key", escapeHtml: true },
  });
};

const signUpValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string()
      .pattern(/^[ a-zA-ZÀ-ÿ'-]+$/)
      .min(2)
      .max(40)
      .required()
      .messages({
        "string.base": `This field should be a string`,
        "string.empty": `This field is required`,
        "string.min": `This field should be at least {#limit} characters`,
        "string.max": `This field should be under {#limit} characters`,
        "string.pattern.base": `This field can only contain letters`,
        "any.required": `This field is required`,
      }),
    lastName: Joi.string()
      .pattern(/^[ a-zA-ZÀ-ÿ'-]+$/)
      .min(2)
      .max(40)
      .required()
      .messages({
        "string.base": `This field should be a string`,
        "string.empty": `This field is required`,
        "string.min": `This field should be at least {#limit} characters`,
        "string.max": `This field should be under {#limit} characters`,
        "string.pattern.base": `This field can only contain letters`,
        "any.required": `This field is required`,
      }),
    email: Joi.string()
      .email({ tlds: { allow: tldSet } })
      .min(3)
      .max(60)
      .required()
      .messages({
        "string.base": `This field should be a string`,
        "string.empty": `This field is required`,
        "string.min": `This field should be at least {#limit} characters`,
        "string.max": `This field should be under {#limit} characters`,
        "any.required": `This field is required`,
        "string.email": `The email you entered appears to be invalid`,
      }),
    area: Joi.object({
      name:
        Joi.string()
          .pattern(/^[ a-zA-ZÀ-ÿ0-9'.,-]+$/)
          .min(2)
          .required()
          .messages({
            "string.base": `This field should be a string`,
            "string.empty": `This field is required`,
            "string.min": `This field should be at least {#limit} characters`,
            "string.pattern.base": `This field cannot contain special characters`,
            "any.required": `This field is required`,
          }),
      region:
        Joi.string()
          .pattern(/^[ a-zA-ZÀ-ÿ0-9'.,-]+$/)
          .min(2)
          .required()
          .messages({
            "string.base": `This field should be a string`,
            "string.empty": `This field is required`,
            "string.min": `This field should be at least {#limit} characters`,
            "string.pattern.base": `This field cannot contain special characters`,
            "any.required": `This field is required`,
          }),
      country:
        Joi.string()
          .pattern(/^[ a-zA-ZÀ-ÿ0-9'.,-]+$/)
          .min(2)
          .required()
          .messages({
            "string.base": `This field should be a string`,
            "string.empty": `This field is required`,
            "string.min": `This field should be at least {#limit} characters`,
            "string.pattern.base": `This field cannot contain special characters`,
            "any.required": `This field is required`,
          }),
      location: Joi.object({
        type: Joi.string().required().valid("Point"),
        coordinates: Joi.array().items(Joi.number().required())
      })
    }).required().messages({
      "object.base": `This field is required`,
      "object.empty": `This field is required`,
      "any.required": `This field is required`,
    }),
    gender: Joi.string()
      .pattern(/^[ a-zA-ZÀ-ÿ'-]+$/)
      .allow("", null)
      .max(40)
      .messages({
        "string.base": `This field should be a string`,
        "string.min": `This field should be at least {#limit} characters`,
        "string.max": `This field should be under {#limit} characters`,
        "string.pattern.base": `This field can only contain letters`,
      }),
    birthdate: Joi.date()
      .iso()
      .max(maxBirthdate)
      .min(minBirthdate)
      .required()
      .messages({
        "date.base": `Please enter a valid date`,
        "date.max": `You must be 18 years or older to sign up`,
        "date.min": `Birthdate must be greater than ${minBirthdate.toLocaleDateString()}`,
        "date.format": `Please enter a valid date`,
      }),
    maxTravelDistance: Joi.number().min(5000).max(100000).multiple(5000).required().messages({
      "number.base": `This field should be a number`,
      "number.min": `Maximum travel distance should be greater than or equal to 5 km`,
      "number.max": `Maximum travel distance should be less than or equal to 100 km`,
      "number.multiple": `Maximum travel distance should be a multiple of 5`,
      "any.required": `This field is required`,
    }),
    interests: Joi.array()
      .items(Joi.any().valid(...interestCategories))
      .min(1)
      .required()
      .messages({
        "any.only": `You can only choose between the provided options`,
        "array.min": `This field is required`,
        "any.required": `This field is required`,
      }),
    availability: Joi.array()
      .items(Joi.any().valid(...availabilityCategories))
      .min(1)
      .required()
      .messages({
        "any.only": `You can only choose between the provided options`,
        "array.min": `This field is required`,
        "any.required": `This field is required`,
      }),
    selectedEventTags: Joi.array()
      .items(Joi.any().valid(...eventTagCategories))
      .messages({
        "any.only": `You can only choose between the provided options`,
      }),
  });
  return schema.validate(data, {
    abortEarly: false,
    errors: { label: "key", escapeHtml: true },
  });
};

const contactUsValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string()
      .pattern(/^[ a-zA-ZÀ-ÿ'-]+$/)
      .min(2)
      .max(40)
      .required()
      .messages({
        "string.base": `This field should be a string`,
        "string.empty": `This field is required`,
        "string.min": `This field should be at least {#limit} characters`,
        "string.max": `This field should be under {#limit} characters`,
        "string.pattern.base": `This field can only contain letters`,
        "any.required": `This field is required`,
      }),
    email: Joi.string()
      .email({ tlds: { allow: tldSet } })
      .min(3)
      .max(60)
      .required()
      .messages({
        "string.base": `This field should be a string`,
        "string.empty": `This field is required`,
        "string.min": `This field should be at least {#limit} characters`,
        "string.max": `This field should be under {#limit} characters`,
        "any.required": `This field is required`,
        "string.email": `The email you entered appears to be invalid`,
      }),
    subject: Joi.string()
      .pattern(/[<>]/, { invert: true })
      .min(3)
      .max(80)
      .required()
      .messages({
        "string.base": `This field should be a string`,
        "string.empty": `This field is required`,
        "string.min": `This field should be at least {#limit} characters`,
        "string.max": `This field should be under {#limit} characters`,
        "string.pattern.base": `This field can only contain letters`,
        "string.pattern.invert.base": `This field cannot contain the characters < or >`,
        "any.required": `This field is required`,
      }),
    message: Joi.string()
      .pattern(/[<>]/, { invert: true })
      .min(10)
      .max(3000)
      .required()
      .messages({
        "string.base": `This field should be a string`,
        "string.empty": `This field is required`,
        "string.min": `This field should be at least {#limit} characters`,
        "string.max": `This field should be under {#limit} characters`,
        "string.pattern.base": `This field can only contain letters`,
        "string.pattern.invert.base": `This field cannot contain the characters < or >`,
        "any.required": `This field is required`,
      }),
  });
  return schema.validate(data, {
    abortEarly: false,
    errors: { label: "key", escapeHtml: true },
  });
};

module.exports.emailValidation = emailValidation;
module.exports.registrationValidation = registrationValidation;
module.exports.signUpValidation = signUpValidation;
module.exports.contactUsValidation = contactUsValidation;
