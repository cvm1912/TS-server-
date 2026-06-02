import { ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";
import logger from "../config/logger";

export const validateRequestBody = (schema: ZodSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try{
            logger.info("Validating request body", {correlationId: req.headers['x-correlation-id']});
            await schema.parseAsync(req.body);
            logger.info("Request body validation successful", {correlationId: req.headers['x-correlation-id']});
            return next();
        }catch(err){
            logger.error("Request body validation failed", {correlationId: req.headers['x-correlation-id'], error: err});
            return res.status(400).json({ error: "Invalid request body" });
        }
    }
}


export const validateRequestQuery = (schema: ZodSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try{
            await schema.parseAsync(req.query);
            logger.info("Request query validation successful", {correlationId: req.headers['x-correlation-id']});
            return next();
        }catch(err){
            logger.error("Request query validation failed", {correlationId: req.headers['x-correlation-id'], error: err});
            return res.status(400).json({ error: "Invalid request query" });
        }
    }
}


export const validateRequestParams = (schema: ZodSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try{
            await schema.parseAsync(req.params);
            logger.info("Request params validation successful", {correlationId: req.headers['x-correlation-id']});
            return next();
        }catch(err){
            logger.error("Request params validation failed", {correlationId: req.headers['x-correlation-id'], error: err});
            return res.status(400).json({ error: "Invalid request parameters" });
        }
    }
}

export const validateRequestHeaders = (schema: ZodSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try{
            await schema.parseAsync(req.headers);
            logger.info("Request headers validation successful", {correlationId: req.headers['x-correlation-id']});
            return next();
        }catch(err){
            logger.error("Request headers validation failed", {correlationId: req.headers['x-correlation-id'], error: err});
            return res.status(400).json({ error: "Invalid request headers" });
        }
    }
}

