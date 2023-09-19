const http = require('http');
const port = 8080;
const fs = require('fs');

const server = http.createServer(function(req,res){

    const data = fs.readFileSync('index.html');

    res.end(data);

});

server.listen(port,function(error){
    if(error){
        console.log('error has generated');
    }
    console.log('server is running on port ',port);
});