import * as fs from 'fs';

export const inputStream = ({ input }) => {
  return input
    ? fs.createReadStream(input)
    : process.stdin;
}
