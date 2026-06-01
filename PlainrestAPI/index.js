const http = require('http');

// create a basic http server
const PORT = 3000;
const server = http.createServer(async (req, res)=>{
    console.log('Received a request');
    if(req.method ==='GET'){
       res.end('Hello, How are you doing?');
    }else if(req.method === 'POST'){
      res.end('POST request received');

    }else{
        res.end('hello world')
    }

});
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});





