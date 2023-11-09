const { send,read } = require("./internals");

// const internals = require('./internals');

function make(url, data) {
   send(url, data);
  return read();
}
const responseData = make('https://google.com');
console.log(responseData);