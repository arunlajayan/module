function encrypt(data) {
    return 'encrpted data';
  }
  
  exports.send = function send(url, data) {
    const encrypteddata = encrypt(data);
    console.log(`sending ${encrypteddata} to ${url}`);
  };
  