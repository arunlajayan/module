function encrypt(data) {
    return 'encrpted data';
  }
  
  function send(url, data) {
    const encrypteddata = encrypt(data);
    console.log(`sending ${encrypteddata} to ${url}`);
  }
  
  module.exports = {
    send
  }
  