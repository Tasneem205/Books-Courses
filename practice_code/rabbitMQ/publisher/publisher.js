const amqp = require('amqplib');


const msg = {number: 19};

async function connect() {
    try {
        const connection = await amqp.connect('amqp://localhost:2');
        const channel = await connection.createChannel();
        const result = channel.assertQueue('jobs');
        channel.sendToQueue('jobs', Buffer.from(JSON.stringify(msg)));
        console.log('Connected to RabbitMQ'); 
        channel.close();
        connection.close();
    } catch (error) {
        console.error('Error connecting to RabbitMQ:', error);
    }
}

connect();