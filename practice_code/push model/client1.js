let ws = new WebSocket('ws://localhost:8080');
ws.onmessage = message => console.log(`Recieved: ${message.data}`);
ws.send("Hello! I'm client1"); // and at every message you use send function 