import http from "http";
import url from "url";

function requestlistener(request, response){
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    if (request.method == "POST") {
        console.log("Hab was gefunden")
    }
}

const backend_Server = http.createServer(requestlistener);

backend_Server.listen(8080);