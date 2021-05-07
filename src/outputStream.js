import * as fs from 'fs';

export const inputStream = ({ inputSource }) => {
  return inputSource
    ? fs.createReadStream(inputSource)
    : process.stdin;
}
