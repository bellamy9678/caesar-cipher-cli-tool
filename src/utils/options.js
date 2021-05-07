import { MODE, ERROR_MESSAGES, DEFAULT_PARAMS } from '../constants.js';
import commander, { program } from 'commander';

export const options = () => {
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
  } catch (error) {
    let message = ERROR_MESSAGES.DEFAULT;
    switch (error.code) {
      case 'commander.unknownOption': { message = ERROR_MESSAGES.OPTIONS; break; }
      case 'commander.missingMandatoryOptionValue': { message = ERROR_MESSAGES.REQUIRED; break; }
      case 'commander.invalidOptionArgument': { message = ERROR_MESSAGES.INVALID; break; }
      default: message = ERROR_MESSAGES.DEFAULT;
    }

    process.stderr.write(message);
    process.exit(1);
  }

  return { ...DEFAULT_PARAMS, ...CLIsArguments };
}
