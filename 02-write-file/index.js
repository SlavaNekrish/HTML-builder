const fs = require('fs');
const path = require('path');
const { stdin, stdout, stderr } = process;

const absolutePath = path.join(__dirname, 'destination.txt');
const output = fs.createWriteStream(absolutePath);

stdout.write('Hello, my friend! Write something\n');

stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    process.exit();
  } else {
    output.write(data);
  }
});

process.on('exit', (code) => {
  if (code === 0) {
    stdout.write('Good luck, my friend!');
  } else {
    stderr.write(`Something went wrong. The program exited with code ${code}`);
  }
});

process.on('SIGINT', () => {
  process.exit();
});
