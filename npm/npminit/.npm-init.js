const desc = prompt('description?','A new package...')
const bar = prompt('bar?','')
const count = prompt('count?','1')

module.exports={
  key:'value',
  foo:{
    bar:bar,
    count:count
  },
  name:prompt('name?',process.cwd().split('/').pop()),
  version:prompt('version?','1.0.0'),
  description:desc,
  main:'index.js'
}