var http = require('http');
var url = require('url');
var fs = require('fs');
var mongodb = require('mongodb');
var parser = require('body-parser');
var express = require('express');
var dburl = "mongodb://127.0.0.1:27017/";
var app = express();
var mongoClient = new mongodb.MongoClient(dburl);
var path = require('path');
let db='cards';
var client = new mongodb.MongoClient(dburl);
//var express = require('express');
//var app=express();
async function insertCard(card)
{
    try 
    {
        // Connect to the MongoDB cluster
        await client.connect();
        // Make the appropriate DB calls
        var result = await client.db('cards').collection('cardlist').insertOne(card);

    } catch (e) 
    {
        console.error(e);
    }
    finally
    {
        client.close();
    }
}
async function getCards()
{
    try 
    {
        // Connect to the MongoDB cluster
        await client.connect();
        // Make the appropriate DB calls
        var result = await client.db('cards').collection('cardlist').find();

    } catch (e) 
    {
        console.error(e);
    }
    finally
    {
        client.close();
    }  
}
async function listDatabases(client)
{
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
app.use(express.static(path.join(__dirname, 'public')));
app.use(parser.json())
app.post('/posts', function requestHandler(req, res) 
{
    card=req.body;
    console.log(req.body);
    res.end('received');
    insertCard(card);
});
app.get('/gets', function requestHandler(req, res) 
{
    console.log('request received');
    cards=getCards();
    console.log(cards);
    res.write(cards);
});
/*var server = http.createServer(function(request,response) 
    {
        var path=url.parse(request.url).pathname;
        switch(path)
        {
            case '/':
                fs.readFile('./public/index.html',function(err,data)
                {
                    if (err) throw err;
                    response.writeHead(200,{'content-type':'text/html',"Access-Control-Allow-Origin" : "*"});
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
            /*case request.method=='POST'&& '/posts':
                response.writeHead(200,{"Access-Control-Allow-Origin" : "*"});
                console.log('received');
                response.end('received');
                console.log(request.parse);
                break;
            /*case '/posts':
                console.log('received')
                response.end('received');
                console.log(request);
                break;
        }
    }
)*/
//server.listen(2501);
app.listen(2501);
console.log('listening on port 2501');