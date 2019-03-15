let http=require('http')
let fs=require('fs')
let data=''
const server = http.createServer((req, res) => {
  console.log(req.url)
  let path=req.url
  if(path=="/"){
    res.writeHead(200,{
      'Content-Type': 'text/html; charset=utf-8',
    })
    // 同步读取
   data= fs.readFileSync('index.html');
  }else if(path=="/a.txt"){
    res.writeHead(200,{
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Disposition': 'attachment; filename=a.txt'
    })
    // 同步读取
    data= fs.readFileSync('a.txt');
  }else if(path=="/b.pdf"){
    res.writeHead(200,{
      'Content-Type': 'application/pdf; charset=utf-8',
      'Content-Disposition': 'attachment; filename=file.pdf'
    })
    // 同步读取
    data= fs.readFileSync('b.pdf');
  }
 
  else if(path=="/c.zip"){
    res.writeHead(200,{
      'Content-Type': 'application/octet-stream; charset=utf-8',
      'Content-Disposition': 'attachment; filename=c.zip'
    })
    // 同步读取
    data= fs.readFileSync('c.zip');
  }

  else if(path=="/stream"){
    res.writeHead(200,{
      'Content-Type': 'text/plain; charset=utf-8',  
    })
    // 同步读取
    data= fs.readFileSync('a.txt');
  }  
  
  res.end(data);
});
 
server.listen(8000);
console.log("Server has started.");
