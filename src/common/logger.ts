import pino from 'pino';

export const logger = pino({
  formatters: {
    level: (label) => ({ label }),
  },
});
