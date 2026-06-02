import {Request, Response, NextFunction} from 'express';
import { AppError } from '../utils/errors/app-error';


export const genericErrorHandler = (Err: AppError, req:Request, res:Response, next:NextFunction) =>{
    res.status(Err.statusCode).json({
        success:false,
        message: Err.message
    })
}

