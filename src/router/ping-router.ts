import express from 'express';
import {pingHandler} from '../controller/ping-controller';

const router = express.Router();

router.get('/ping', pingHandler);

export default router;