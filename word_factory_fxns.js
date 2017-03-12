const word = {
 count(){
   return this.word.length;
 },
 lookUp(){
   return this.lookUpUrl + this.word;
 }
}

const englishWordFactory = (theWord) => {
 return Object.assign(Object.create(word), {word: theWord, language: 'English', lookUpUrl: 'https://en.wiktionary.org/wiki/'})
};

const japaneseWordFactory = (theWord) => {
 return Object.assign(Object.create(word), {word: theWord, language: 'Japanese', lookUpUrl: 'http://jisho.org/search/'})
};

const englishWord = englishWordFactory('dog');
const japaneseWord = japaneseWordFactory('犬');

let wish = require('wish');
// interfaces tests
wish(japaneseWord.word === "犬");
wish(japaneseWord.lookUp() === "http://jisho.org/search/犬");
wish(japaneseWord.count() === 1);
wish(englishWord.word === "dog");
wish(englishWord.lookUp() === "https://en.wiktionary.org/wiki/dog");
wish(englishWord.count() === 3);
// internals tests
wish(typeof japaneseWord === 'object');
console.log(Object.getPrototypeOf(japaneseWord));
// prints { count: [Function: count], lookUp: [Function: lookUp] }
