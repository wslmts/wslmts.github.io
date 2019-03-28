//命令交互
let inquirer=require('inquirer')
var questions = [
  {
    type:'input',
    name:'name',
    message:'what is your name?',
    default:'hahaha'
  },
  {
    type:'list',
    name:'favorate',
    message:'what is your hobby?',
    choices:['painting','reading','swimming']
  },
  {
    type: 'rawlist',
    name: 'theme',
    message: 'What do you want to do?',
    choices: [
      'Order a pizza',
      'Make a reservation',
      new inquirer.Separator(),
      'Ask opening hours',
      'Talk to the receptionist'
    ]
  },
  {
    type: 'confirm',
    name: 'country',
    message: 'are u a girl?',
    default: false
  },
  {
    type: 'expand',
    name: 'toppings',
    message: 'What about the toppings?',
    choices: [
      {
        key: 'p',
        name: 'Pepperoni and cheese',
        value: 'PepperoniCheese'
      },
      {
        key: 'a',
        name: 'All dressed',
        value: 'alldressed'
      },
      {
        key: 'w',
        name: 'Hawaiian',
        value: 'hawaiian'
      }
    ]
  },
];

inquirer.prompt(questions).then(answers => {
  console.log('\nOrder receipt:');
  console.log(JSON.stringify(answers, null, '  '));
});
