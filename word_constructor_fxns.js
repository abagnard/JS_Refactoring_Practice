function Word(){
 this.count = function(){
   return this.word.length;
 };
 this.lookUp = function(){
   return this.lookUpUrl + this.word;
 };
};
function EnglishWord(word){
  Word.call(this);
  this.word = word;
  this.language = "English";
  this.lookUpUrl = 'https://en.wiktionary.org/wiki/';
};

function JapaneseWord(word){
  Word.call(this);
  this.word = word;
  this.language = "Japanese";
  this.lookUpUrl = 'http://jisho.org/search/';
};
JapaneseWord.prototype = Object.create(Word.prototype);
JapaneseWord.prototype.constructor = JapaneseWord;
EnglishWord.prototype = Object.create(Word.prototype);
EnglishWord.prototype.constructor = EnglishWord;


const wish = require('wish');
const deepEqual = require('deep-equal');

const japaneseWord =  new JapaneseWord("犬");
const englishWord = new EnglishWord("dog");

//interface tests for JW
wish(japaneseWord.word === "犬");
wish(japaneseWord.lookup() === 'http://jisho.org/search/犬');
wish(japaneseWord.count() === 1);

//interface tests for JW
wish(englishWord.word === "dog");
wish(englishWord.lookup() === 'https://en.wiktionary.org/wiki/dog');
// wish(englishWord.count() === 1);

//internal tests for JW
wish(typeof japaneseWord === 'object');
wish(typeof JapaneseWord === 'function');
wish(japaneseWord instanceof JapaneseWord);
wish(japaneseWord instanceof Word);
wish(!(JapaneseWord instanceof Word));
wish(japaneseWord.constructor === JapaneseWord); //JW's constructor is the class JapaneseWord
wish(Object.getPrototypeOf(JapaneseWord) === Word); //prototpe of JapaneseWord class is Word class


wish(deepEqual(Object.getPrototypeOf(japaneseWord), {}));
console.log(Object.getPrototypeOf(japaneseWord));
