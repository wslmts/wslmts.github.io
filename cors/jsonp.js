let express=require('express')
let app=express()
app.use(express.static(__dirname));
app.get('/cors',function(req,res){
  let {callback1}=req.query
  res.end(`${callback1}('hello jsonp')`)
})
app.listen(3000)