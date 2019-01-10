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

function showWeather(result){
  result = JSON.parse(result) 
  var list = result.data;
  var table = '<table><tr><th>日期</th><th>天气</th><th>最低温度</th><th>最高温度</th></tr>';
  list.forEach(item => {
    table += '<tr>';
    table += '<td>'+item.date+'</td>';
    table += '<td width="100">'+item.wea+'</td>';
    table += '<td>'+item.tem2+'</td>';
    table += '<td>'+item.tem1+'</td>';
    table += '</tr>';
  });

  table += '</table>';
  document.getElementById('weather').innerHTML = table;
}

var city = localStorage.city;
city = city?city:'北京';
document.getElementById('city').innerText = city;
var url = 'https://www.tianqiapi.com/api/?version=v1&city='+city;
httpRequest(url, showWeather);