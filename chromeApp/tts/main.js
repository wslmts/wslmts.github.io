var btn=document.getElementById('r') 
var stop=document.getElementById('stop') 
var pause=document.getElementById('pause') 
var resume=document.getElementById('resume') 
btn.addEventListener('click', function(e) {
  chrome.tts.speak('Speak this first.');
  chrome.tts.speak('Speak this next, when the first sentence is done.', {enqueue: true});
});

stop.addEventListener('click', function(e) {
  chrome.tts.stop();
});
pause.addEventListener('click', function(e) {
  chrome.tts.pause();
});
resume.addEventListener('click', function(e) {
  chrome.tts.resume();
});
var container=document.getElementById('container') 
chrome.tts.getVoices(function(voices){
  container.innerText=voices
});