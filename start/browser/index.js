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

client.on("message", function (topic, _payload) {
  const payload = JSON.parse(_payload.toString());

  if (topic === 'state') {
    const status = payload.status;
    const lamp = document.querySelector('.lamp');

    lamp.classList.remove('on', 'off', 'pumpkin')
    lamp.classList.add(status);
  }
});

const button = document.getElementById('turn-on-button');
button.addEventListener('click', function () {
  const payload = JSON.stringify({
    status: 'on'
  });

  client.publish('state', payload);
});