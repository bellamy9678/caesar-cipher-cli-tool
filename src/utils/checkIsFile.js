import { existsSync } from 'fs';
import { ERROR_MESSAGES } from '../constants.js'

export const checkIsFile = (paths) => {
  paths.forEach((path) => {
    if (path && !existsSync(path)) {
      process.stderr.write(`File '${path}' ${ERROR_MESSAGES.FILE}`);
      process.exit(1);
    }
  });
};
