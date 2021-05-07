import * as fs from 'fs';

export const outputStream = ({ outputSource }) => {
  return outputSource
    ? fs.createWriteStream(outputSource)
    : process.stdout;
}
