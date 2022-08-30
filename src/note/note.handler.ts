import { SuccessResponseObject } from '@akhilome/common';
import { RequestHandler } from '@akhilome/orion';

export const createNote: RequestHandler<unknown, unknown, Record<string, string>> = (req, res) => {
  res.json(new SuccessResponseObject('Note created successfully', req.body));
};

export const fetchAllNotes: RequestHandler = (_, res) => {
  res.json(new SuccessResponseObject('All notes retrieved', []));
};

export const fetchSingleNote: RequestHandler = (_, res) => {
  res.json(new SuccessResponseObject('Single note retrieved', {}));
};
