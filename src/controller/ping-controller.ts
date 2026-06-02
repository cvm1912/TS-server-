import {Request, Response} from 'express'
export const pingHandler = (req: Request, res: Response) =>{
    console.log("The request body ", req.body);
    res.send('Pong');
}


