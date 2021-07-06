import UserService from '../services/userService'
import { Request, Response, NextFunction } from 'express'
import AuthValidator from '../validator/authValidator'
import returnSuccess from '../utilities/successHandler'

const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    const validator = new AuthValidator()
    try {
        await validator.register().validateAsync(req.body)

        const userService = new UserService()
        const user = await userService.createUser(req.body)
        
        const response = {
            id: user.id,
            email: user.email
        }
        returnSuccess(200, res, "Created user", response)
    } catch (error) {
        next(error)
    }
}

const login = async (req: Request, res: Response, next: NextFunction) => {
    const validator = new AuthValidator()
    try {
        await validator.register().validateAsync(req.body)

        const userService = new UserService()
        const token = await userService.login(req.body)

        returnSuccess(200, res, "Login success", token)
    } catch (error) {
        next(error)
    }
}
export { registerUser, login }