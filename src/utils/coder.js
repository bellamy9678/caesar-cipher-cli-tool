import { MODE } from '../constants.js';

const ABC_CAPITAL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ABC_SMALL = ABC_CAPITAL.split().map(e => e.toLowerCase()).join();
const ABC = new Set([...ABC_CAPITAL, ...ABC_SMALL]);
const CODE_A = ABC_CAPITAL.charCodeAt(0);
const CODE_a = ABC_SMALL.charCodeAt(0);

const convert = ({ letter, shift, cryptoModeFlag }) => {
  const realShift = parseInt(shift) >= 0 ? shift % ABC_CAPITAL.length : (ABC_CAPITAL.length + parseInt(shift)) % ABC_CAPITAL.length;
  console.log(realShift)
  const code = letter.charCodeAt(0);
  const capitalLetterFlag = code >= CODE_a ? CODE_a : CODE_A;
  return String.fromCharCode(
    (code - capitalLetterFlag + realShift * cryptoModeFlag + ABC_CAPITAL.length) % ABC_CAPITAL.length + capitalLetterFlag
  );
};

export const coder = ({ action, shift, text }) => {
  const cryptoModeFlag = action === MODE.ENCODE ? 1 : -1;
  return Array.prototype.map.call(text, letter => ABC.has(letter) ? convert({ letter, shift, cryptoModeFlag }) : letter).join('');
}
