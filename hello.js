// Simple Web Server

/*
    Modules 
        Modules are sets of functions that you may want to include in your application
        In Node.js there are a number of built-in modules that are avaiable without 
        having to install anything. 

        To include a module you use the require() function with the name of the module/file
        to be included. In our example we are including the http module.  
        
*/

// Constant variables are used to store some unchanging data

// Here a constant variable is defined 'http' to store the http module
const http = require('http');

// Here we create constance variables to hold the hostname and port information
const hostname = '127.0.0.1';
const port = 1337;

// Here the createServer() method of the http module that was created. The 
// createServder() method take in a request 'req' and a response 'res' as a
// parameter
http.createServer(function(req, res){
    // The writeHead() method of the response 'res' parameter is called to
    // set the status to and a the Context-Type to text/plain.
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    // End the response and echo out Hello World.
    res.end('Hello World\n');
// Using dot syntax add a listener passing the port and hostnames
}).listen(port, hostname, () => {
    // Once the server is created send a message to the console
    // to show that the server is running
    console.log('Server running at http://${hostname}:${port}/');
});


// console.log(module);