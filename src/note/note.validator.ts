import { Route } from '@akhilome/orion';
import Joi from 'joi';

export const fetchSingleNoteValidator: Route['validator'] = {
  params: Joi.object({
    id: Joi.number().positive().required(),
  }),
};

export const createNoteValidator: Route['validator'] = {
  body: Joi.object({
    title: Joi.string().min(6).trim().required(),
    description: Joi.string().min(6).trim(),
    content: Joi.string().min(300).trim(),
  }),
};
