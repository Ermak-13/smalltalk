# MQTT API
How build API usging MQT


## start
A simple MQTT applications. Consist of:
* browser app (turn on lamp)
* server app (turn off lamp after 5 seconds)
* badclient app (break lamp)

## Installation
1. set Flespi Token (start/browser/index.js, start/server/index.js, start/badclient/index.js)
2. build browser app
```
npx webpack start/browser/index.js -o start/browser/dist/index.js
```
3. run server app
```
node start/server/index.js
```
4. run badclient
```
node start/badclient/index.js
```


## api
A simple MQTT Api applications. Consist of:
* browser app (make request to turn off lamp)
* server app (set state & response)


## Installation
1. set Flespi Token (api/browser/index.js, api/server/index.js)
2. build browser app
```
npx webpack api/browser/index.js -o api/browser/dist/index.js
```
3. run server ap
```
node api/server/index.js
```