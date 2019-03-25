let express = require('express');
let app = express();
app.use(express.static(__dirname));
app.get('/time',function(req,res){
  console.log('request')
  setTimeout(()=>{
    res.end(new Date().toLocaleString());
  },3000)
  
});

app.listen(8080);