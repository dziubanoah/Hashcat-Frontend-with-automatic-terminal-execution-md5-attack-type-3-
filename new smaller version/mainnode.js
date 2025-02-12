import http from "http";
import cors from "cors"

function requestlistener(request, response){
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type'); 

    let basiscode = "cd C:\hashcat-6.2.6 && hashcat.exe -m 0 -a 3 ";

    if (request.method == "OPTIONS") {
        console.log("OPTIONS bekommen");
        console.log(request.method);
        response.writeHead(200);
        response.end();
    }
    else if (request.method == "POST") {
        console.log("POST Bekommen");
        console.log(request.method);

        let body = ''; // Datenverarbeitung
        request.on("data", chunk => {
            body += chunk // empfangene Daten werden zu Body hinzugefügt
        });
        request.on("end", () => { // wenn der req vollständig war, wird der wert ausgegeben
            console.log("empfangene Datei: " + body[0])
        });
    }
    else {
        console.log("hab was anderes gefunden.");
        console.log(request.method);
    }
}

const backend_Server = http.createServer(requestlistener);

backend_Server.listen(8080);