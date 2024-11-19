const fs = require('fs');
const { exec } = require('child_process');

fs.readFile('readvalue.txt', 'utf8', (err, data) => {
  const hashPW = data.trim();
  exec(`start cmd.exe /K ${hashPW}`);
});