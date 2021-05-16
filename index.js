import { getOptions } from './src/utils/getOptions.js';
import { inputStream } from './src/stream/inputStream.js';
import { transformStream } from './src/stream/transformStream.js';
import { outputStream } from './src/stream/outputStream.js';
import { pipeline } from 'stream';

const options = getOptions();

pipeline(
  inputStream(options),
  transformStream(options),
  outputStream(options),
  (error) => {
    if (error) {
      process.stderr.write('Pipeline failed', error);
    } else {
      process.stdout.write('Success');
    }
  },
);
