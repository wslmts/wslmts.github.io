chrome.omnibox.onInputChanged.addListener(function(text, suggest){
  suggest([{
      content: text,
      description: 'Search '+text+' in Wikipedia'
  }]);
});