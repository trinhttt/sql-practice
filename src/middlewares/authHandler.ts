import { Request, Response, NextFunction } from 'express'
import InvalidException from '../exceptions/invalidException'
import jwt from 'jsonwebtoken'

const isAuthorizedUser = async (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.headers.authorization
    const token = authorization && authorization.split(" ")[1] //?? true && string
    if (!token) {
        next(new InvalidException("Empty token", 403))
        return
    }
    try {
        jwt.verify(token, process.env.SECRET || "trinh_zz_qtqd", (err: any, user: any) => {
            if (err) {
                throw new InvalidException("Wrong token")
            }
            req.user = user // email & pass
            next()
        })
    } catch (error) {
        next(error)
    }
}

export default isAuthorizedUser