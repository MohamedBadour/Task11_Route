import Joi from "joi";

export const signupSchema = {
  body: Joi.object({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    phone: Joi.string().optional()
  })
};

export const signinSchema = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  })
};

export const googleLoginSchema = {
  body: Joi.object({
    idToken: Joi.string().required()
  })
};
