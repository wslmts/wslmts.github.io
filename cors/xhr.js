let express=require('express')
let http=require('http')
let app=express()
app.use(express.static(__dirname));

app.get('/servercors',function(req,res){
  //res.writeHead(200,{NAME:'CORS'})
  console.log(111,req.headers)
  http.request({
      host:'127.0.0.1',
      port:3001,
      path:'/cors1',
      method:'get',
      header:req.headers
    },resp=>{
     let body=''
     resp.on('data',chunk=>{
      console.log('chunk',chunk)
       body+=chunk
     })
     resp.on('end',()=>{
       console.log('data',body)
       res.end(body)
     })
   }).end()
})
app.post('/beacon',function(req,res){
  let data=''
  req.on('data',function(c){
    data+=c
  })
  req.on('end',function(){
    res.end(data)
  })
})
app.listen(3000)
