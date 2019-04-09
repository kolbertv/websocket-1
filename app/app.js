const ws = require('ws');

const server = new ws.Server({
    port: 2999
});

// server.on('connection', result => {
//     result.send(`["message:send", ${JSON.stringify({
//         id: 'fghjkl',
//         device_id: 1234,
//         message: 'ответ сервера'
//     })}]`);
// });

server.on('connection', result => {
    result.send(JSON.stringify({
        id: 'fghjkl',
        device_id: 1234,
        message: 'ответ сервера'
    }))
});