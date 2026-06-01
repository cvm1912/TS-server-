import express from 'express';
import {serverConfig, loadConfig} from './config';
import pingRouter from './router/ping-router';
const app = express();

// register all the routers here
app.use(pingRouter);

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
});