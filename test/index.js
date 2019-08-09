// import dict from './dict.js';
dict = require('../build/sourceDict')

var time = new Date().getTime();

let str = 'привет пока';
const wordsCount = str.split(' ').length;
let wordsReplace = 0;
let newStr;
let iter = 0;

for (let key of Object.keys(dict)) {
  if (str.indexOf(key) !== -1) {
    str = str.replace(key, dict[key])
    wordsReplace++;
    console.log(`${wordsCount} ${wordsReplace} ${dict[key]}`);
  }
  // if (wordsCount === wordsReplace) break;
  // console.log(++iter)
}
console.log(str);

time = new Date().getTime() - time;
console.log('Время выполнения = ', time);