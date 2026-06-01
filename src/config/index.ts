// this file contain basic configuration logic for app server to work 
import dotenv from 'dotenv';


type ServerConfig = {
    PORT : number
}

export function loadConfig() {
    dotenv.config();
}

loadConfig();

export const serverConfig : ServerConfig = {
   PORT : Number(process.env.PORT) || 3001
};

