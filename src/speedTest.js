// import dict from './dict.js';
const conveter = require('./converter');
const dict = require('../build/sourceDict');
const commonWords = require('./commonWords5000');
const text = require('./text');

let str = text;

let time = new Date().getTime();

let wordsReplace = 0;

const words = str.split(' ');
const accentWords = [];


var3Count = () => {
    console.log(conveter(text));
};

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
};

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
