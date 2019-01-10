chrome.runtime.sendMessage('Hello', function(response){
  document.write(response);
});
chrome.browserAction.setBadgeBackgroundColor({color: '#0000FF'});
chrome.browserAction.setBadgeText({text: 'Msg'});