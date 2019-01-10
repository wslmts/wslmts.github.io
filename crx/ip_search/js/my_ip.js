function httpRequest(url, callback){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
          callback(xhr.responseText);
      }
  }
  xhr.send();
}

httpRequest('http://pv.sohu.com/cityjson', function(txt){
  let pos=txt.indexOf('=')+1
  let str=txt.substr(pos).trim()
  str=str.substr(0,str.length-1)
  let obj=JSON.parse(str)
  document.getElementById('ip_div').innerText = obj.cip;
  document.getElementById('city').innerText = obj.cname;
});