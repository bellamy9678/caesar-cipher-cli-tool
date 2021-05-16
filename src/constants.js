export const MODE = {
  ENCODE: 'encode',
  DECODE: 'decode',
};

export const ERROR_MESSAGES = {
  SHIFT: 'Shift hasn\'t been set. Please ensure that --shift (-s) has numeric value\n',
  MODE: 'Action hasn\'t been set. Please choose either --encode (-e) or --decode (-d)\n',
  OPTIONS: 'Unknown options were typed, please check parameters\n',
  DEFAULT: 'Unknown error, please try again later\n',
  REQUIRED: 'Required parameter is missing\n',
  INVALID: 'Invalid parameter was chosen\n',
  MISSING_PARAMETER: 'Required parameter was missed\n',
  FILE: 'does not exist\n',
};

export const DEFAULT_PARAMS = {
  input: null,
  output: null,
  shift: null,
  action: null,
}