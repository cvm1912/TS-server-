import express from 'express';
import {serverConfig, loadConfig} from './config';
import logger from './config/logger';
import v1Router from './router/v1/index-router';
import { attachCorealationId } from './middleware/corelation-middleware';
import { genericErrorHandler } from './middleware/error-handler';
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
// register all the routers here

app.use(attachCorealationId);
app.use('/api/v1',v1Router);
app.use(genericErrorHandler);

app.listen(serverConfig.PORT, () => {
  logger.info(`Server is running on http://localhost:${serverConfig.PORT}`);
});