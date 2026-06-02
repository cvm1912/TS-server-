import { v4 as uuidv4 } from 'uuid';
import { Request, Response, NextFunction } from 'express';

export const attachCorealationId = (req: Request, res: Response, next: NextFunction) => {
    const correlationId = uuidv4();
    req.headers['x-correlation-id'] = correlationId;
    
    next();
};






