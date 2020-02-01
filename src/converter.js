const dict = require('../build/sourceDict');

const makeStartWithUpperCase = str => str[0].toUpperCase() + str.slice(1);
const makeStartWithLowerCase = str => str[0].toLowerCase() + str.slice(1);

module.exports = (text) => {
    const words = text.split(' ');
    const accentWords = [];

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
    return accentWords.join(' ');
};