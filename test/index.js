// import dict from './dict.js';
const dict = require('../build/sourceDict');
const commonWords = require('./commonWords5000');
const text = require('./text');

let str = text;

let time = new Date().getTime();

const wordsCount = str.split(' ').length;
let wordsReplace = 0;
let newStr;
let iter = 0;

for (let key of commonWords) {
// for (let key of Object.keys(dict)) {
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
