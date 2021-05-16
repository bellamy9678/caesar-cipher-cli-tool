import * as fs from 'fs';

export const outputStream = ({ output }) => {
  return output
    ? fs.createWriteStream(output, {flags: 'a'})
    : process.stdout;
}
