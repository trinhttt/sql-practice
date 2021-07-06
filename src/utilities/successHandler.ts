import { Response } from 'express'

async function returnSuccess(status: number, res: Response, message: string, data: any) {
    return res
        .status(status)
        .json({
            success: true,
            message: message,
            data: data,
        })
}

export default returnSuccess