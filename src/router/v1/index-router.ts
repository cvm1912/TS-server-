import express from 'express';
import {Request, Response, NextFunction} from 'express';

const router = express.Router();

import pingRouter from '../ping-router';


router.use('/ping',  pingRouter);
export default router;