const htpp = require('http');
const { request } = require('node:http');

const server = htpp.createServer((request, response) =>{
    //console.log(request);
    //response.write('Welcome to out home page');
    //response.end();
    if (request.url === "/")
    {
        response.end('Welcome to out home page');
    }    

    if(request.url === '/about'){
        response.end('Here is our short history')
    }

    response.end(`
    <h1>Oops!!! </h1>
    <p> We cannot seem to find the page that you are looking for</p>
    <a href="/"> back home </a>
    `)
});

server.listen(5000);