import { pipeline } from 'stream';

const input = process.stdin;
program.exitOverride();

try {
  program.parse(process.argv);
  console.log(program.opts());
} catch (error) {
  console.log(JSON.stringify(error))
}
const out = process.stdout;

const boo = 'bonk!';

pipeline(
  input,
  out,
  () => {
    process.stderr(boo);
  }
);
