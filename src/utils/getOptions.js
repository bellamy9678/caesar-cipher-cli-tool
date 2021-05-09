import { ERROR_MESSAGES, DEFAULT_PARAMS } from '../constants.js';
import commander, { program } from 'commander';
import { checkIsFile } from './checkIsFile.js';

export const getOptions = () => {
  let CLIsArguments = {};
  program
    .requiredOption('-s, --shift <value>', 'This is shift')
    .addOption(new commander.Option('-a, --action <action>', 'This is action').choices(['encode', 'decode']).makeOptionMandatory())
    .option('-i, --input <value>', 'This is input')
    .option('-o, --output <value>', 'This is output')
    .exitOverride()
    .allowExcessArguments();
  
  try {
    program.parse(process.argv);
    CLIsArguments = program.opts();
    checkIsFile([ CLIsArguments.input, CLIsArguments.output ]);
  } catch (error) {
    let message = ERROR_MESSAGES.DEFAULT;
    switch (error.code) {
      case 'commander.unknownOption': { message = ERROR_MESSAGES.OPTIONS; break; }
      case 'commander.missingMandatoryOptionValue': { message = ERROR_MESSAGES.REQUIRED; break; }
      case 'commander.invalidOptionArgument': { message = ERROR_MESSAGES.INVALID; break; }
      case 'commander.optionMissingArgument': { message = ERROR_MESSAGES.MISSING_PARAMETER; break; }
      default: message = ERROR_MESSAGES.DEFAULT;
    }

    process.stderr.write(message);
    process.exit(1);
  }

  return { ...DEFAULT_PARAMS, ...CLIsArguments };
}
