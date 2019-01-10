//读取目录
var loopEntriesButton = document.getElementById('le');
var list=document.getElementById('loopEntry') 
loopEntriesButton.addEventListener('click', function(e) {
    chrome.fileSystem.chooseEntry({type: 'openDirectory'}, function(Entry) {
        list.innerText = Entry.fullPath;
        getSubEntries(0, Entry, list);
    });
});

function getSubEntries(depth, Entry, parent){
    var dirReader = Entry.createReader();
    dirReader.readEntries(function(Entries) {
        for(var i=0; i<Entries.length; i++){
            var newParent = document.createElement('div');
            newParent.id = Date.now();
            newParent.innerText = echoEntry(depth+1, Entries[i]);
            parent.appendChild(newParent);
            if(Entries[i].isDirectory){
                getSubEntries(depth+1, Entries[i], newParent);
            }
        }
    }, errorHandler);
}

function echoEntry(depth, Entry){
    var tree = '|';
    for(var i=0; i<depth-1; i++){
        tree += ' |';
    }
    return (tree+'-'+Entry.name);
}
function errorHandler(e){
    console.log(e.message);
}


//读取文件
var btn = document.getElementById('rf');

btn.addEventListener('click', function(e) {
    chrome.fileSystem.chooseEntry({type: 'openFile'}, function(fileEntry){
        fileEntry.file(function(file){
            var reader = new FileReader();
            reader.onload = function(){
                var text = this.result;
                list.innerHTML=text;
                //do something with text
            }
            reader.readAsText(file);
        });
    });
});

//创建及删除目录和文件;创建文件与创建目录基本相同,指定exclusive属性为true时，创建同名文件也会引起错误
// chrome.fileSystem.chooseEntry({type: 'openDirectory'}, function(Entry) {
//     Entry.getDirectory('new_folder', {create: true}, function(subEntry) {
//         //We'll do something with subEntry later
//     }, errorHandler);
// });

//写文件
var btn1 = document.getElementById('wf');
btn1.addEventListener('click', function(e) {
    chrome.fileSystem.chooseEntry({type: 'saveFile',suggestedName: 'log.txt'}, function(Entry) {
        Entry.createWriter(function(fileWriter) {
            fileWriter.write(new Blob(['Hello World'], {type: 'text/plain'}));
        }, errorHandler);
    });
});