import Joi from 'joi'

class AuthValidator {
    public register() {
        const schema: Joi.AnySchema = Joi.object({
            email: Joi
                .string()
                .required()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
                .messages({
                    "any.required": "Please enter email",
                    "string.email": "Email format does not match",
                  }),
            password: Joi
                .string()
                .min(6)
                .max(20)
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

            confirmPassword: Joi
                .string()
                .required()
                .equal(Joi.ref('password'))

        })
        return schema
    }
}

export default AuthValidator