const request = require('./request');
const response = require('./response');
function make(url, data) {
  request.send(url, data);
  return response.read();
}
const responseData = make('https://google.com');
console.log(responseData);
