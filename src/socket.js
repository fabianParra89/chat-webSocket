import { Server } from "socket.io";

let io;

const conversation = [
    {
        username:'coderHouse',
        body: 'Hola a la comunidad',
    },
]

export const init = (httpServer) => {
    io = new Server(httpServer);
    
    io.on('connection', (socketClient) =>{
        socketClient.emit('update-conversation', conversation);

        socketClient.on('new-message', (newMessage) => {
            conversation.push(newMessage);
            io.emit('update-conversation', conversation);
        })
    })

};