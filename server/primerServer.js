const http = require('http');
const { argv } = require('process');
const port = 3000;

const server = http
.createServer((req, res)=> {
    console.log(req.url);
    const name=argv[2];
    res.setHeader('Content-type', 'text/html')
    res.end(`<h1>Hello ${name}!</h1>`);
})
.listen(port);
console.log(`Server running at http://localhost:${port}/`);