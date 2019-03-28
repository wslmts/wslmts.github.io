```
执行npm test时，首先会执行pretest,test,posttest;

执行 npm 脚本时要传入参数，需要在命令后加 -- 标明, 如 npm run test----grep="pattern" 可以将 --grep="pattern" 参数传给 test 命令

bin 字段的配置格式为: <command>:<file>, 即 命令名:可执行文件. npm 执行 install 时，会分析每个依赖包的 package.json 中的 bin 字段，
并将其包含的条目安装到 ./node_modules/.bin 目录中，文件名为 <command>。而如果是全局模式安装，则会在 npm 全局安装路径的 bin 目录下创建指向 
<file> 名为 <command> 的软链。因此， ./node_modules/.bin/webpack 文件在通过命令行调用时，实际上就是在执行 node./node_modules/.bin/webpack.js 命令。

npm 脚本的原理非常简单。每当执行npm run，就会自动新建一个 Shell，在这个 Shell 里面执行指定的脚本命令。
因此，只要是 Shell（一般是 Bash）可以运行的命令，就可以写在 npm 脚本里面。
比较特别的是，npm run新建的这个 Shell，会将当前目录的node_modules/.bin子目录加入PATH变量，执行结束后，再将PATH变量恢复原样。                 
这意味着，当前目录的node_modules/.bin子目录里面的所有脚本，都可以直接用脚本名调用，而不必加上路径。
比如，当前项目的依赖里面有 Mocha，只要直接写mocha test就可以了。而不用写成下面这样。
"test": "./node_modules/.bin/mocha test"

自定义 npm init 行为
npm init 命令的原理并不复杂，调用脚本，输出一个初始化的 package.json 文件就是了。所以相应地，定制 npm init 命令的实现方式也很简单，
在 Home 目录创建一个 .npm-init.js 即可，该文件的 module.exports 即为 package.json 配置内容，需要获取用户输入时候，使用 prompt() 方法即可。

```