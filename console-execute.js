const fs = require('fs');
const { exec } = require('child_process');

fs.readFile('basiccode.txt', 'utf8', (err, data1) => {
  const Basiccode = data1.trim();
  fs.readFile('Hashing_Output.txt', 'utf8', (err, data2) => {
    const Basiccode2 = data2.trim();
    fs.readFile('readvalue3.txt', 'utf8', (err, data3) => {
      const Basiccode3 = data3.trim();
      exec(`start cmd.exe /K ${Basiccode1} && ${Basiccode2} && ${Basiccode3}`);
    });
  });
});
