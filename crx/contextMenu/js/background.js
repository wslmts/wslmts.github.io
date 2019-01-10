chrome.contextMenus.create({
  'type':'normal',
  'title':'使用Google翻译……',
  'contexts':['selection'],
  'id':'cn',
  'onclick':translate
});

chrome.contextMenus.create({
  type: 'normal',
  title: 'normal Menu A',
  id: 'a'
});

chrome.contextMenus.create({
  type: 'radio',
  title: 'radio Menu B',
  id: 'b',
  checked: true
});

chrome.contextMenus.create({
  type: 'radio',
  title: 'radio Menu C',
  id: 'c'
});

chrome.contextMenus.create({
  type: 'radio',
  title: 'radio Menu H',
  id: 'h'
});

chrome.contextMenus.create({
  type: 'checkbox',
  title: 'checkbox Menu D',
  id: 'd',
  checked: true
});

chrome.contextMenus.create({
  type: 'separator'
});

chrome.contextMenus.create({
  type: 'checkbox',
  title: 'checkbox Menu E',
  id: 'e'
});

chrome.contextMenus.create({
  type: 'normal',
  title: 'normal Menu F',
  id: 'f',
  parentId: 'a'
});

chrome.contextMenus.create({
  type: 'normal',
  title: 'normal Menu G',
  id: 'g',
  parentId: 'a'
});



function translate(info, tab){
  var url = 'http://translate.google.com.hk/#auto/zh-CN/'+info.selectionText ;
  window.open(url, '_blank');
}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  chrome.contextMenus.update('cn',{
      'title':'使用Google翻译“'+message+'”'
  });
});