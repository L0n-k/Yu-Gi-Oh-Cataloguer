var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
//var express = require('express');
//var app=express();
//app.use(express.static(path.join(__dirname, 'public')));
var server = http.createServer(function(request,response) 
    {
        var path=url.parse(request.url).pathname;
        switch(path)
        {
            case '/':
                response.writeHead(200, 
                {
                    'content-type':'text/plain'
                });
                response.write("this is a Test Message.");
                response.end();
                break;
            case '/index.html':
                fs.readFile('./public/index.html',function(err,data)
                {
                    if (err) throw err;
                    response.writeHead(200,{'content-type':'text/html','Cache-Control': 'no-cache',
                    'Connection': 'keep-alive'});
                    response.write(data);
                    response.end;
                });
                break;
            case '/styles/styles.css':
                fs.readFile('./public/styles/styles.css',function(err,data)
                {
                    if (err) throw err;
                    response.writeHead(200, {'Content-Type': 'text/css'});
                    response.write(data);
                    response.end();
                });
                
                break;
            case '/scripts/main.js':
                fs.readFile('./public/scripts/main.js',function(err,data)
                {
                    if (err) throw err;
                    response.writeHead(200,{'content-type':'application/javascript'});
                    response.write(data);
                    response.end;
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