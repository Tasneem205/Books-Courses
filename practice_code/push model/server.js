const http = require('http');
const webSocketServer = require('websocket').server;
let connections = []; // users

const httpServer = http.createServer();

const webSocket = new webSocketServer({ "httpServer": httpServer });

httpServer.listen(8080, () => {
    console.log('Server is listening on port 8080');
});

webSocket.on("request", request => {
    const connection = request.accept(null, request.origin);
    connection.on("message", message => {
        for (user of connections) {
            if (!c.connected) {
                connections.splice(connections.indexOf(user), 1);
            } else {
                user.send(`User${connection.socket.remotePort} says ${message.utf8Data}`)
            }
        }
    });
    connections.push(connection);
    connections.forEach(user => user.send(`User${connection.socket.remotePort} just connected`));
});