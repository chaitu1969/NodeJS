// Import http module
const http = require('http');

//Creating a port number
const port = 9000; 

// Creating server
const server = http.createServer(function(req,res){
    console.log(req.url);

    if(req.url == '/home'){
       return res.end('This is home page');
    }

    res.end('Welcome to NodeJS server');
    
});

// Listen server on specified port number
server.listen(port, function(err){
    if(err){
        console.log("error has generated");
    }
    console.log("server is up and running on port :", port);
});