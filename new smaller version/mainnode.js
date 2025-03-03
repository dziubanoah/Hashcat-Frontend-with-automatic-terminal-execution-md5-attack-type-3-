import http from "http";
<<<<<<< HEAD
<<<<<<< HEAD
import url from "url";
=======
import cors from "cors";
import { exec } from "child_process";
>>>>>>> 460ceb13938cc36f25aa608e3e3c5db233443e5c
=======
import cors from "cors";
import { exec } from "child_process";
>>>>>>> 460ceb13938cc36f25aa608e3e3c5db233443e5c

function requestlistener(request, response){
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type'); 

    let basiscode = "cd C:/hashcat-6.2.6 && hashcat.exe -m 0 -a 3 ";

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
        request.on("end", () => { // wenn der request vollständig war, werden die Werte ausgegeben.
            let prase_Body = JSON.parse(body); // sorgt dafür dass die JSON als JavaScript Objekt behandelt wird.
            console.log("empfangene Datei: " + prase_Body);
            console.log("pw is = " + prase_Body.Passwort_verschlüsselt);
            console.log("pw länge is = " + prase_Body.Passwort_Laenge_for_hashcat);
            let Passwort_verschlüsselt =  prase_Body.Passwort_verschlüsselt;
            let Passwort_Laenge_for_hashcat = prase_Body.Passwort_Laenge_for_hashcat;
            exec(`start cmd.exe /K "${basiscode} ${Passwort_verschlüsselt} ${Passwort_Laenge_for_hashcat}"`);
        });
    }
    else {
        console.log("hab was anderes gefunden.");
        console.log(request.method);
    }
}

const backend_Server = http.createServer(requestlistener);

backend_Server.listen(8080);