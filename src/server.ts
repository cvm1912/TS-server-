import express from 'express';
import {serverConfig, loadConfig} from './config';
const app = express();




app.get('/ping', (req, res) => {
  res.send('Pong');
});

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
});