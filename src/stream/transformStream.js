import { Transform } from 'stream';
import { coder } from '../utils/coder.js';

export const transformStream = ({ action, shift }) => {
  return new Transform({
    transform(chunk, encoding, callback) {
      this.push(coder({ action, shift, text: chunk.toString() }));
      callback();
    }
  })
};