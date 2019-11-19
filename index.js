const readline = require('readline');
process.stdin.setEncoding('utf-8');
console.log("input is a TTY?", process.stdin.isTTY);

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.setPrompt('> ');
rl.prompt();

let input = '';

rl.on('line', function (line) {
  input += line;
  rl.prompt();
});

rl.on('close', function () {
  const processed = processInput(input);
  console.log('PROCESSED:', processed);
});

function processInput(input) {
  const splitOn = 80 - 5;
  let i = 0;

  return input
    .trim()
    .split('')
    .map((letter => {
      if (letter === '\'') {
        return '\\\'';
      }
      return letter;
    }))
    .map((letter, index, self) => {
      let ret;

      if (index === 0) {
        ret = '\'' + letter;
      } else if (i === splitOn) {
        ret = letter + '\' + \n\'';
        i = 0;
      } else {
        ret = letter;
      }
      if (index === self.length - 1) {
        ret += '\'';
      }
      ++i;
      return ret;
    })
    .join('');
}
