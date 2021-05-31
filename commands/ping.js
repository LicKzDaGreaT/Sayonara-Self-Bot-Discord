module.exports = {
    id: 'ping',
    aliases: ['pong'],
    channels: 'any',
    exec: (call) => 
    {
        call.message.channel.send('Pong! ' + Math.round(call.client.ping) + 'ms D-API delay.');
    }
};