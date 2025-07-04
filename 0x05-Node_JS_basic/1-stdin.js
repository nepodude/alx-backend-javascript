process.stdout.write('Welcome to Holberton school, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
});

// Handle when input ends (piped input or Ctrl+D)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
