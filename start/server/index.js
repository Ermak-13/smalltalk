const mqtt = require('mqtt')

const options = {
  username: 'FlespiToken tXQfzb3m8EWgnI3WmNoXaQiDo7zdfoPx9vCyxwLtYxz95tWi4a32Obv38U6b6My6',
  protocolId: 'MQTT',
  protocolVersion: 5
}
const client = mqtt.connect('wss://mqtt.flespi.io:443', options)

client.on('connect', function () {
  client.subscribe('state');
});

const TIMEOUT = 5 * 1000;
client.on('message', function (topic, _message, options) {
  const message = JSON.parse(_message.toString());

  if (topic === 'state' && message.status === 'on') {
    setTimeout(function () {
      const payload = JSON.stringify({
        status: 'off'
      });

      client.publish('state', payload);
    }, TIMEOUT);
  }
});