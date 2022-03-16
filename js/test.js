const http=require('http');//module to Create Server 

const fs=require('fs');//Module to read html files

const url=require('path');//moudule to work with urls

const server=http.createServer((req,res)=>{
    const path=url.parse(req.url).name
    console.log(path)
   fs.readFile('../index.html',null,(error,data)=>{
       if(error){ res.end("Erro 400")}
       else{
        res.end(data)
       }
   })
});
server.listen(2041,'127.0.0.1',()=>{
    console.log("server is running")
})