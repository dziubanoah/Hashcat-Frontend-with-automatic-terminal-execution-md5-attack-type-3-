const http = require("http");
const fs = require('fs')

http.createServer((req, res) => {
    let body = "";
    req.on("data", chunk => body += chunk); //empfängt die Daten
    req.on("end", () => {
        let Length = body; 

    let LengthValue = "yippiee";

    fs.writeFile('PWLength.txt', LengthValue, (err) => {

    if (err) throw err;
})

    })
}).listen(189);

//Weitera aktion zur verschlüsselung: