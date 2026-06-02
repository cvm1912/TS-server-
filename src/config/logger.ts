import winston from 'winston';

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
    winston.format.printf(({ timestamp, level, message, ...data}) => {
        return JSON.stringify({timestamp, level, message, ...data});
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({filename: 'logs/server.log'})
  ]
 
});

export default logger;
 