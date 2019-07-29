const mqtt = require('mqtt')

const options = {
  username: 'FlespiToken ___',
  protocolId: 'MQTT',
  protocolVersion: 5
}
const mqttClient = mqtt.connect('wss://mqtt.flespi.io:443', options)

mqttClient.on('connect', function () {
  mqttClient.subscribe('state');
});

mqttClient.on("message", function (topic, _payload) {
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

  mqttClient.publish('state', payload);
});