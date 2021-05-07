import { Transform } from 'stream';
import { coder } from '../utils/coder.js';

export const transformStream = (({ mode, shift }) => {
  return new Transform({
    transform(chunk, encoding, callback) {
      this.push(coder({ mode, shift, chunk }));
      callback();
    }
  })
})();