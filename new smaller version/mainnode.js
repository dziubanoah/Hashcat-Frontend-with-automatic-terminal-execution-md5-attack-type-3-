import http from "http";
import cors from "cors"

function requestlistener(request, response){
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    if (request.method == "OPTIONS") {
        console.log("OPTIONS bekommen");
        console.log(request.method);
    }
    else if (request.method == "POST") {
        console.log("POST Bekommen");
        console.log(request.method);
    }
    else {
        console.log("hab was anderes gefunden.");
        console.log(request.method);
    }
}

const backend_Server = http.createServer(requestlistener);

backend_Server.listen(8080);