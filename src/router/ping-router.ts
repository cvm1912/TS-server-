import express from 'express';
import {pingHandler} from '../controller/ping-controller';
import {validateRequestBody} from '../validator';
import { pingSchema } from '../validator/ping-validator';

const router = express.Router();
router.get('/', validateRequestBody(pingSchema), pingHandler);

export default router;