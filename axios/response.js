const axios = require('axios')

axios.get('https://wwww.google.com',{ timeout: 5000 }).then((res)=>{
    console.log(res)
})
.catch(e =>{
    console.log("haihaihia",e.code)
})