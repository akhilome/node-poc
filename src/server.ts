import http from 'http';
import app from './app';
import { logger } from './common/logger';
import { env } from './config';

const server = http.createServer(app);

server.listen(env.port);
server.on('listening', () => logger.info(`server running on port ${env.port}`));
