// const express = require('express')
// const fs = require('fs')

// const app = express();
// const port = 3000;

// app.get('/', (req, res)=>{
//     const data = fs.readFileSync("index.html")
//     res.end(data.toString());
// })

// app.listen(port, ()=>{
//     console.log(`App listen at http://localhost:${port}`);
// })



const http = require('node:http');
const fs = require('fs');

const port = process.env.PORT || 3000;


const server = http.createServer((req, res)=>{
    console.log(req)
    res.statusCode = 200;
   const data = fs.readFileSync("./view/index.html")
    res.end(data.toString());
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});