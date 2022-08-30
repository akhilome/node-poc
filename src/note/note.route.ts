import { Route, RoutesMeta } from '@akhilome/orion';
import { createNote, fetchAllNotes, fetchSingleNote } from './note.handler';
import { createNoteValidator, fetchSingleNoteValidator } from './note.validator';

export const routes: Route[] = [
  { path: '/', method: 'POST', handler: createNote, validator: createNoteValidator },
  { path: '/', method: 'GET', handler: fetchAllNotes },
  { path: '/:id', method: 'GET', handler: fetchSingleNote, validator: fetchSingleNoteValidator },
];

export const meta: RoutesMeta = {
  base: 'notes',
};
