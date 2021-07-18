import Joi from 'joi'

class ProfileValidator {
    public register() {
        const schema: Joi.AnySchema = Joi.object({
            gender: Joi
                .string()
                .required()
                .messages({
                    "any.required": "Please enter email",
                }),
            password: Joi
                .string()
                .required()
                .messages({
                    "any.required": "Please enter email",
                })

        })
        return schema
    }
}

export default ProfileValidator