const mqtt = require('mqtt')

const options = {
  username: 'FlespiToken tXQfzb3m8EWgnI3WmNoXaQiDo7zdfoPx9vCyxwLtYxz95tWi4a32Obv38U6b6My6',
  protocolId: 'MQTT',
  protocolVersion: 5
}
const client = mqtt.connect('wss://mqtt.flespi.io:443', options)

client.on('connect', function () {
  const payload = JSON.stringify({
    status: 'pumpkin'
  });
  client.publish('state', payload)
});