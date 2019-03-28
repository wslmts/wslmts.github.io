//花样字体
/**
 * param1 Input Text - A string of text to turn into ASCII Art.
 * param2 Font Options - Either a string indicating the font name or an options object,可选参数
 * param3 Callback - A function to execute with the generated ASCII Art
 */
var figlet = require('figlet');
figlet('hello figlet',function(err,data){
   if(err){
     console.error(err);
     return
   }
   console.info(data)
})