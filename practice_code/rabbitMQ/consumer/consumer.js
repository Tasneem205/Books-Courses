const amqp = require('amqplib');

async function connect() {
    try {
        const connection = await amqp.connect('amqp://localhost:2');
        const channel = await connection.createChannel();
        const result = channel.assertQueue('jobs');
        channel.consume("jobs", message => {
            console.log(message.content.toString());
            channel.ack(message);
        });
        console.log('Connected to RabbitMQ, Waiting for messages...');
    } catch (error) {
        console.error('Error connecting to RabbitMQ:', error);
    }
}

connect();