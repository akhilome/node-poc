import { ErrorResponseObject, SuccessResponseObject } from '@akhilome/common';
import { orion } from '@akhilome/orion';
import express, { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import PinoHttp from 'pino-http';
import { logger } from './common/logger';

const app = express();

app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));
app.use(helmet());
app.use(PinoHttp({ logger }));
app.use(orion());

app.get('/', (_, res) => res.json(new SuccessResponseObject('Notes')));
// default catch all handler
app.all('*', (_, res: Response): void => {
  res.status(404).json(new ErrorResponseObject('route not defined'));
});
app.use((err: Error, _: Request, res: Response, __: NextFunction) => {
  /**
   * proper global error handling can happen here
   * e.g. check the instance of the err object which got to this point
   *   if error in instance of displayable error, return the error message
   *   attached, else a generic error message.
   *
   * Also, logging to sentry/bugsnag or whatever error tracking system the
   * team uses can happen here.
   */
  if (err instanceof ErrorResponseObject) {
    res.status(400).json(err);
  } else {
    res.status(500).json(new ErrorResponseObject('An unknown error occured'));
  }
});

export default app;
