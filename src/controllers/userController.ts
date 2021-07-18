import { Request, Response, NextFunction } from 'express'
import UserService from '../services/userService'
import returnSuccess from '../utilities/successHandler'

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userService = new UserService()
        const user = await userService.getAllUsers()
        returnSuccess(200, res, "Got list", user)
    } catch (error){
      
        next(error)
    }
}

const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userService = new UserService()
        const user = await userService.getUserById(req.params.id)
        returnSuccess(200, res, "Got list", user)
    } catch (error){
        next(error)
    }
}

export { getAllUsers, getUserById }