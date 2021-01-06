const temp="Abhijeet Marathe"
const http= require("http");


const server=http.createServer((req,res) => {
console.log(req.method)


res.end('Successsful    ')

})
server.listen(5000);
