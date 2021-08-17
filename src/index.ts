import { readFileSync } from 'fs';

function main(): void {
  const args = process.argv.slice(2);

  if (args.length > 1) {
    console.log('Usage: loxt [script]');
  } else if (args.length === 1) {
    runFile(args[0]);
  }
  // else {
  //   runPrompt();
  // }
}

function runFile(path: string): void {
  const str = readFileSync(path, { encoding: 'utf-8' });
  run(str);
}

// function runPrompt(): void {
// }

function run(str: string): void {
  const scanner = new Scanner(str);
  const tokens = scanner.scanTokens();

  for (let token of tokens) {
    console.log(token);
  }
}
