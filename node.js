var http = require('http');
var url = require('url');
var fs = require('fs');
var mongodb = require('mongodb');
//var express = require('express');
var dburl = "mongodb://127.0.0.1:27017/";
var mongoClient = new mongodb.MongoClient(dburl);
//var path = require('path');
//var express = require('express');
//var app=express();
//app.use(express.static(path.join(__dirname, 'public')));
async function startServer() {
    // connect to database
    await mongoClient.connect();
    // listen for requests
    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
  }
  
var server = http.createServer(function(request,response) 
    {
        var path=url.parse(request.url).pathname;
        switch(path)
        {
            case '/':
                fs.readFile('./public/index.html',function(err,data)
                {
                    if (err) throw err;
                    response.writeHead(200,{'content-type':'text/html'});
                    response.write(data);
                    response.end();
                    console.log('HTML loaded!');
                });
                break;
            case '/index.html':
                fs.readFile('./public/index.html',function(err,data)
                {
                    if (err) throw err;
                    response.writeHead(200,{'content-type':'text/html'});
                    response.write(data);
                    response.end();
                    console.log('HTML loaded!');
                });
                break;    
            case '/styles/styles.css':
                fs.readFile('./public/styles/styles.css',function(err,data)
                {
                    if (err) throw err;
                    response.writeHead(200, {'Content-Type': 'text/css'});
                    response.write(data);
                    response.end();
                    console.log('CSS loaded!');
                });
                break;
            case '/scripts/main.js':
                fs.readFile('./public/scripts/main.js',function(err,data)
                {
                    if (err) throw err;
                    response.writeHead(200, {'Content-Type': 'application/javascript'});
                    response.write(data);
                    response.end();
                    console.log('main.js loaded!');
                });
                break;
            case '/card_lookup.html':
                fs.readFile('./public/card_lookup.html',function(err,data)
                {
                    if (err) throw err;
                    response.writeHead(200,{'content-type':'text/html'});
                    response.write(data);
                    response.end();
                    console.log('HTML loaded!');
                });
                break;
            case '/card_lookup_alt_example.html':
                fs.readFile('./public/card_lookup_alt_example.html',function(err,data)
                {
                    if (err) throw err;
                    response.writeHead(200,{'content-type':'text/html'});
                    response.write(data);
                    response.end();
                    console.log('HTML loaded!');
                });
                break;
            case '/pics/Cards/300px-LiveTwinLilla-GEIM-EN-SR-1E.png':
                fs.readFile('./public/pics/Cards/300px-LiveTwinLilla-GEIM-EN-SR-1E.png',function(err,data)
                {
                    if (err) throw err;
                    response.writeHead(200,{'content-type':'image/png'});
                    response.write(data);
                    response.end();
                    console.log('HTML loaded!');
                });
                break;
            case '/pics/Cards/300px-EndymiontheMightyMasterofMagic-SR08-EN-UR-1E.png':
                fs.readFile('./public/pics/Cards/300px-EndymiontheMightyMasterofMagic-SR08-EN-UR-1E.png',function(err,data)
                {
                    if (err) throw err;
                    response.writeHead(200,{'content-type':'image/png'});
                    response.write(data);
                    response.end();
                    console.log('HTML loaded!');
                });
                break;
            /*default:
                response.writeHead(200, {'content-type':'text/plain'});
                response.write("default case.");
                response.end();
                break;*/
        }
    }
)
server.listen(2501);
console.log('listening on port 2501');