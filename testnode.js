const http = require("http");
const fs = require('fs');
const crypto =require('crypto');

http.createServer((req, res) => {
    let body = "";
    req.on("data", chunk => body += chunk); //empfängt die Daten
    req.on("end", () => {
        let value = body; //deklariert body als value

    fs.writeFile('output.txt', value, (err) => {

    if (err) throw err;
});

    let hacker = crypto.createHash('md5').update(value).digest("hex");
    console.log(hacker)
    
    fs.writeFile('Hashing_Output.txt', hacker, (err) => {
        if (err) throw err;
    })

    })
}).listen(187);

//Weitera aktion zur verschlüsselung: