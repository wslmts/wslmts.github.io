//特别注意，如果没有主动指定run_at为document_start（默认为document_idle），下面这种代码是不会生效的：
document.addEventListener('DOMContentLoaded', function()
{
    console.log('我被执行了！');
});