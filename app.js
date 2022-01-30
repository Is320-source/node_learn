const http = require('http')
const express = require('')

http.createServer((request, response) => {
    response.end("TEST")
}).listen( 8081, () => {
    console.log("Server is running rigth now")
})