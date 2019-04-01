let express=require('express')
let app=express()
app.use(express.static(__dirname));
 
app.get('/cors',function(req,res){
  res.setHeader('Access-Control-Allow-Origin','*')
  res.setHeader('Access-Control-Allow-Method','get,put')
  //res.setHeader('Access-Control-Allow-Age',6)
  console.log('get ',req.method)
  res.end('from 3001')
})
app.get('/cors1',function(req,res){
  console.log('get1 ',req.method)
  res.end('server from 3001')
}) 
 
app.listen(3001)