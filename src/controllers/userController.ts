import { Request, Response, NextFunction } from 'express'
import UserService from '../services/userService'
import returnSuccess from '../utilities/successHandler'
import User from "../entities/user";

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userService = new UserService()
        const user: User[] = await userService.getAllUsers()
        returnSuccess(200, res, "Got list", user)
    } catch (error){
        next(error)
    }
}

const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userService = new UserService()
        const user: User | undefined = await userService.getUserById(req.params.id)
        returnSuccess(200, res, "Got user", user)
    } catch (error){
        next(error)
    }
}



export { getAllUsers, getUserById }