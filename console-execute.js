const fs = require('fs');
const { exec } = require('child_process');
const http = require('http')
const cors = require('cors');


// sorget fürs lesen der textdateien und Baut den hashcat command zusammen.
http.createServer((req, res) => {
  let body = "";
  req.on("data", chunk => body += chunk); //empfängt die Daten
  req.on("end", () => {
      let start_console = body; //deklariert body als value
      console.log(start_console);
      if (start_console == "start_console") {
        fs.readFile('basiccode.txt', 'utf8', (err, data1) => {
          const Basiccode = data1.trim();
          fs.readFile('Hashing_Output.txt', 'utf8', (err, data2) => {
            const Basiccode2 = data2.trim();
            fs.readFile('PWLength.txt', 'utf8', (err, data3) => {
              const Basiccode3 = data3.trim()
              console.log(`${Basiccode} && ${Basiccode2} && ${Basiccode3}`);
              exec(`start cmd.exe /K "${Basiccode} ${Basiccode2} ${Basiccode3}"`);
            });
          });
        });
      }

  })
}).listen(1099);


/*

fs.readFile('basiccode.txt', 'utf8', (err, data1) => {
  const Basiccode = data1.trim();
  fs.readFile('Hashing_Output.txt', 'utf8', (err, data2) => {
    const Basiccode2 = data2.trim();
    fs.readFile('PWLength.txt', 'utf8', (err, data3) => {
      const Basiccode3 = data3.trim()
      console.log(`${Basiccode} && ${Basiccode2} && ${Basiccode3}`);
      exec(`start cmd.exe /K "${Basiccode} ${Basiccode2} ${Basiccode3}"`);
    });
  });
});
*/ 