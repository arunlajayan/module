const {send} = require('./request');
const {read} = require('./response');
function make(url, data) {
  send(url, data);
  return read();
}
const responseData = make('https://google.com');
console.log(responseData);
