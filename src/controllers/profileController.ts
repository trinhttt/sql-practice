import { Request, Response, NextFunction } from 'express'
import ProfileService from '../services/profileService'
import UserService from '../services/userService'
import returnSuccess from '../utilities/successHandler'
import User from "../entities/user";
import ProfileValidator from '../validator/profileValidator'

const getProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const service = new UserService()
        const user: User | undefined = await service.findByEmail(req.user.email, ["profile"])
        returnSuccess(200, res, "Got profile", user)
    } catch (error) {

        next(error)
    }
}

const updateProfile = async (req: Request, res: Response, next: NextFunction) => {
    // const { params: { id }, body: { data } } = req
    const validator = new ProfileValidator()
    try {
        await validator.register().validateAsync(req.body)
        const service = new ProfileService()
        const profile = await service.updateOrCreate(req.user, req.body)
        returnSuccess(200, res, "Updated profile", profile)
    } catch (error) {
        next(error)
    }
}

export { getProfile, updateProfile }