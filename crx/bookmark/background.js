//bookmarks
chrome.bookmarks.getTree((bookmarkArray)=>{
  console.log('bookmarks:',bookmarkArray)
})
chrome.bookmarks.getChildren('0', function(bookmarkArray){
  console.log(bookmarkArray);
});
chrome.bookmarks.getSubTree('0', function(bookmarkArray){
  console.log(bookmarkArray);
});

//cookie
chrome.cookies.get({
  url: 'https://github.com',
  name: 'dotcom_user'
}, function(cookie){
  console.log('github name is :',cookie.value);
});

//history
chrome.history.search({
  text: 'Google',
  startTime: new Date().getTime()-24*3600*1000,
  endTime: new Date().getTime(),
  maxResults: 60
}, function(historyItemArray){
  console.log(historyItemArray);
});
//读取用户已安装扩展和应用的信息
chrome.management.getAll(function(exInfoArray){
  console.log('management',exInfoArray);
});

//获取标签信息
chrome.tabs.getCurrent(function(tab){
  console.log(tab);
});
 