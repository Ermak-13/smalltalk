const mqtt = require('mqtt')

const options = {
  username: 'FlespiToken ___',
  protocolId: 'MQTT',
  protocolVersion: 5
}
const mqttClient = mqtt.connect('wss://mqtt.flespi.io:443', options)

mqttClient.on('connect', function () {
  const payload = JSON.stringify({
    status: 'pumpkin'
  });
  mqttClient.publish('state', payload)
});