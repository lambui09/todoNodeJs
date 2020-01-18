const fs = require('fs');
const http = require('http');
const routes = require('routes');
const server = http.createServer((req, res) => {
   const url = req.url
   const method = req.method
   if (url === '/') {
      res.write('<html>')
      res.write('<head><title>Enter Message</title><head>')
      res.write('<body>"<form action ="/message" method = "POST"><input type="text" name = "message" ></body>')
      res.write('</html>')
      return res.end()
   }
   if(url === '/message' && method === 'POST'){
      const body = [];
      req.on('data', chunk =>{
         console.log(chunk);
         body.push(chunk);
      });
      
      return req.on('end', () =>{
         const parseBody = Buffer.concat(body).toString
      })
   
   }
   console.log(req)
   res.setHeader('Content-Type', 'text/html')
   res.write('<html>')
   res.write('<head><title>My first Page</title><head>')
   res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
   res.write('</html>')

   process.exit()
});
server.listen(3000)
