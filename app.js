const http = require('http')

const server = http.createServer((req,res)=>{
res.write('welcome yolo bivth');
res.end();
})

server.listen(5000);