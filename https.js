const request = require('./request');
const read = require('./response');
function make(url, data) {
  request.send(url, data);
  return read();
}
const responseData = make('https://google.com');
console.log(responseData);
