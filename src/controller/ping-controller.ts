import {Request, Response} from 'express'
import logger from '../config/logger';
import { AppError, InternalServerError } from '../utils/errors/app-error';

export const pingHandler = (req: Request, res: Response) =>{
  try{
    logger.info("Pong request received", {correlationId: req.headers['x-correlation-id']});
    res.send('Pong');
}catch(error){
    throw new InternalServerError("An error occurred while processing the ping request");
}


}