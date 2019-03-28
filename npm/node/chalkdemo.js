//字体样式
let chalk=require('chalk');
/**
 * chalk.<style>[.<style>...](string, [string...])
 *  Example: chalk.red.bold.underline('Hello', 'world');
 */
console.log(chalk.blue.bold('Hello') + ' World' + chalk.red('!'));