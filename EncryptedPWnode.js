const http = require("http");
const fs = require('fs')

http.createServer((req, res) => {
    let body = "";
    req.on("data", chunk => body += chunk); //empfängt die Daten
    req.on("end", () => {

    fs.writeFile('Hashing_Output.txt', body, (err) => {

    if (err) throw err;
})

    })
}).listen(188);

//Weitera aktion zur verschlüsselung:
//const { exec } = require('child_process');

//exec('node console-execute.js');