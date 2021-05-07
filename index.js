import * as minimist from 'minimist';
import { getOptions } from './src/getOptions';
import { inputStream } from './src/stream/inputStream';
import { transformStream } from './src/transformStream';
import { outputStream } from './src/outputStream';
import { pipeline } from 'stream';
