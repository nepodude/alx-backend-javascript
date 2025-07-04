process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', () => {
  const name = process.stdin.read();
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

// When input ends (e.g., piping or Ctrl+D)
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
