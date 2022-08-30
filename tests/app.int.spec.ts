import request from 'supertest';
import app from '../src/app';

describe('AppRoot', () => {
  it('should respond correctly for valid route', async () => {
    const res = await request(app).get('/');
    const resBody = res.body as Record<string, string>;

    expect(res.statusCode).toBe(200);
    expect(typeof resBody).toBe('object');
    expect(resBody).toHaveProperty('message');
    expect(resBody.message).toEqual('Notes');
  });

  it('should respond correctly for invalid route', async () => {
    const res = await request(app).get('/invalid-path');
    expect(res.statusCode).toBe(404);
  });
});
