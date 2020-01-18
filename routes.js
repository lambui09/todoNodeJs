const fs = require('fs')
const reqestHandler = (req, res) =>{
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action = "/message" method = "POST" ><input type="text" name = "message"><button>');
        res.write('</html>');
        return res.end();
    }
    if( url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', chunk =>{
            console.log(chunk);
            body.push(chunk);
        });

    }
}
module.exports = reqestHandler;