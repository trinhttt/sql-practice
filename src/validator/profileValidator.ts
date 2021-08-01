import Joi from 'joi'
import { ProfileGender } from '../entities/profile'
class ProfileValidator {
    public register() {
        const schema: Joi.AnySchema = Joi.object({
            gender: Joi
                .number()
                .required()
                // .valid(...Object.values(ProfileGender))
                .messages({
                    "any.required": "Please enter gender",
                }),
            phone: Joi
                .string()
                .required()
                .messages({
                    "any.required": "Please enter phone",
                })

        })
        return schema
    }
}

export default ProfileValidator