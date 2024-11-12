const http = require("http");
const fs = require('fs')

http.createServer((req, res) => {
    let body = "";
    req.on("data", chunk => body += chunk); //empfängt die Daten
    req.on("end", () => {
        let value = body; //deklariert body als value

    fs.writeFile('Output.txt', value, (err) => {

    if (err) throw err;
})

    })
}).listen(187);

