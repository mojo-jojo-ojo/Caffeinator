const ping = require('../commands/ping');

module.exports = (client, message) => {
    if (message.content.startsWith('!ping')) {
        return ping(message);
    }
}