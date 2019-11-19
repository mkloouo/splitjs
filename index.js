/**
 * @author Mykola Odnosumov 
 * @version 1.0.0
 */

const readline = require('readline');
const clipboardy = require('clipboardy');
const path = require('path');

process.stdin.setEncoding('utf-8');

const length = Number(process.argv[2]) || 80;

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

console.log(`usage: ${path.basename(process.argv[0])} ${path.basename(process.argv[1])} [example] [length]`);

if (process.argv[2] === 'example') {
  console.log('example usage: ');
  console.log('input: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non fringilla tellus. Sed malesuada dui in viverra auctor.');
  console.log(`output:
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non fringill' +
'a tellus. Sed malesuada dui in viverra auctor.'`);
  process.exit(0);
}

rl.setPrompt('> ');
rl.prompt();

let input = '';

rl.on('line', function (line) {
  const trimmed = line.trim();
  if (trimmed.length !== 0) {
    input += trimmed + ' ';
  }
  rl.prompt();
});

rl.on('close', function () {
  const processed = splitJs(input, length);
  console.log('Result\n' + processed);
  console.log('> Also copied to clipboard');
  clipboardy.writeSync(processed);
});

function splitJs(input, length) {
  const splitOn = length - 4;
  let i = 0;

  String.re

  const processed = input
    .trim()
    .replace(/'/g, '\\\'')
    .replace(new RegExp(`(.{1,${splitOn}})`, 'g'), '\'$1\' +\n');

  return processed.substring(0, processed.length - 3);
}
