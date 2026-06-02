import { ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";

export const validateRequestBody = (schema: ZodSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try{
            await schema.parseAsync(req.body);
            console.log("validation successful");
            return next();
        }catch(err){
            console.error("validation failed", err);
            return res.status(400).json({ error: "Invalid request body" });
        }
    }
}


export const validateRequestQuery = (schema: ZodSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try{
            await schema.parseAsync(req.query);
            console.log("validation successful");
            return next();
        }catch(err){
            console.error("validation failed", err);
            return res.status(400).json({ error: "Invalid request query" });
        }
    }
}


export const validateRequestParams = (schema: ZodSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try{
            await schema.parseAsync(req.params);
            console.log("validation successful");
            return next();
        }catch(err){
            console.error("validation failed", err);
            return res.status(400).json({ error: "Invalid request parameters" });
        }
    }
}

export const validateRequestHeaders = (schema: ZodSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try{
            await schema.parseAsync(req.headers);
            console.log("validation successful");
            return next();
        }catch(err){
            console.error("validation failed", err);
            return res.status(400).json({ error: "Invalid request headers" });
        }
    }
}

