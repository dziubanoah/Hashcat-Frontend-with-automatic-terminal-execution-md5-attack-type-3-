import http from "http";
import url from "url";
import { exec } from "child_process";

function requestlistener(request, response){
    let basiscode = "cd C:/hashcat-6.2.6 && hashcat.exe -m 0 -a 3 "; //basiscode für Hashcat

    if (request.method == "OPTIONS") { //Options wird angenommen, da vor vielen POST erst ein Options geschickt wird.
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
        request.on("end", () => { // Während des Request end.
            let parse_Body = JSON.parse(body); //Speichert die Werte der JSON in der Variable prase_body
            console.log("empfangene Datei: " + parse_Body);
            console.log("pw is = " + parse_Body.Passwort_verschlüsselt);
            console.log("pw länge is = " + parse_Body.Passwort_Laenge_for_hashcat);
            let Passwort_verschlüsselt =  parse_Body.Passwort_verschlüsselt; //Speichert den JSON Wert in einer Variable
            let Passwort_Laenge_for_hashcat = parse_Body.Passwort_Laenge_for_hashcat; //Speichert den JSON Wert in einer Variable
            exec(`start cmd.exe /K "${basiscode} ${Passwort_verschlüsselt} ${Passwort_Laenge_for_hashcat}"`);
        });
    }
    else {
        console.log("falsche req.method.");
        console.log(request.method);
    }
}

const backend_Server = http.createServer(requestlistener);

backend_Server.listen(8080);