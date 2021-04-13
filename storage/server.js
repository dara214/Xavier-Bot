const express = require('express')
const server = express();



server.all('/', (req, res)=>{
    res.send(`BOT ONLINE, READY TO GO!`)
})
function keepAlive(){
    server.listen(8080, ()=>{console.log("Server is Ready!")});
}
module.exports = keepAlive;