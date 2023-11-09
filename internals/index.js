// run `node index.js` in the terminal

//console.log(`Hello Node.js v${process.versions.node}!`);
// module.exports = {
//     request: require('./request'),
//     response: require('./response')
// }
// const request = require('./request');
// const response = require('./response');

// module.exports ={
//     send: request.send,
//     read: response.read,
// }

module.exports ={
    ...require('./request'),
    ...require('./response')
}