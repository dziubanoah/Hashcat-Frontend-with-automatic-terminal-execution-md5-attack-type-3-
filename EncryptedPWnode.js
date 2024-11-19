const http = require("http");
const fs = require('fs')

http.createServer((req, res) => {
    let body = "";
    req.on("data", chunk => encryptedBody += chunk); //empfängt die Daten
    req.on("end", () => {

    fs.writeFile('Hashing_Output.txt', encryptedBody, (err) => {

    if (err) throw err;
})

    })
}).listen(188);

//Weitera aktion zur verschlüsselung: