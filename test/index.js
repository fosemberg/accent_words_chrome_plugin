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

const words = str.split(' ');
const accentWords = [];

const makeStartWithUpperCase = str => str[0].toUpperCase() + str.slice(1);
const makeStartWithLowerCase = str => str[0].toLowerCase() + str.slice(1);

const var3Count = () => {
  for (let word of words) {
    if (word) {
      let accentWord = dict[word];
      if (accentWord) {
        accentWords.push(accentWord);
      } else {
        accentWord = dict[makeStartWithLowerCase(word)];
        if (accentWord) {
          accentWords.push(makeStartWithUpperCase(accentWord));
        } else {
          const withoutLastChar = word.slice(0, -1);
          accentWord = dict[withoutLastChar];
          if (accentWord) {
            accentWords.push(accentWord + word.slice(-1));
          } else {
            accentWords.push(word);
          }
        }
      }
    }
  }

  console.log(accentWords.join(' '));
}

const var2Count = () => {
  for (let word of words) {
    const accentWord = dict[word];
    if (accentWord) {
      accentWords.push(accentWord);
    } else {
      accentWords.push(word);
    }
  }

  console.log(accentWords.join(' '));
}

const var1Count = () => {
  // for (let key of commonWords) {
  for (let key of Object.keys(dict)) {
    if (str.indexOf(key) !== -1) {
      str = str.replace(key, dict[key])
      wordsReplace++;
      // console.log(`${wordsCount} ${wordsReplace} ${dict[key]}`);
    }
    // if (wordsCount === wordsReplace) break;
    // console.log(++iter)
  }
  console.log(str);
}

// var1Count();
// var2Count();
var3Count();

time = new Date().getTime() - time;
console.log('Время выполнения = ', time);
