function my_clock(el){
  var today=new Date();
  var h=today.getHours();
  var m=today.getMinutes();
  var s=today.getSeconds();
  m=m>=10?m:('0'+m);
  s=s>=10?s:('0'+s);
  el.innerHTML = h+":"+m+":"+s;
  setTimeout(function(){my_clock(el)}, 1000);
}

var clock_div = document.getElementById('clock_div');
my_clock(clock_div);

var today=new Date();
var txt=['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
document.getElementById('time1').innerText=today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
document.getElementById('time').innerText=txt[today.getDay()]