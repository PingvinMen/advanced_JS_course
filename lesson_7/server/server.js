
const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.static('./public'));

app.listen(PORT, () => {
    console.log('Port 3000');
});

/*
const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req.url)
    switch(req.url){
        case '/':
            res.write(req.url);
            res.end();
            break;
        case '/product':
            res.write(req.url);
            res.end();
            break;
        default:
            res.write('error 404');
            res.end(); 
    }
});

server.on('connection', socket=>{
    console.log('Есть контакт');
});

server.listen('3000');
*/