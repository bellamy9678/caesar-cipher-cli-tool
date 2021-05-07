export const MODE = {
  ENCODE: 'encode',
  DECODE: 'decode',
};

export const ERROR_MESSAGES = {
  SHIFT: 'Shift hasn\'t been set. Please ensure that --shift (-s) has numeric value',
  MODE: 'Action hasn\'t been set. Please choose either --encode (-e) or --decode (-d)',
  TEXT: 'Nothing to',
  OPTIONS: 'Unknown options were typed, please check parameters\n',
  DEFAULT: 'Unknown error, please try again later\n',
  REQUIRED: 'Required parameter is missing\n',
  INVALID: 'Invalid parameter was chosen\n',
};

// export const IO_TYPE = {
//   FILE = 'file',
//   CONSOLE = 'console',
// }

export const DEFAULT_PARAMS = {
  input: null,
  output: null,
  shift: null,
}