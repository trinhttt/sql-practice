import { Request, Response, NextFunction } from 'express'
import IError from '../interfaces/errorInterface'

export default (err: IError, req: Request, res: Response, next: NextFunction) => {
    console.log(err)
    return res
        .status(err.status || 500)
        .json({
            isSuccess: false,
            message: err.message || 'Unknown error'
        })
}