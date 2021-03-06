class Word{
  constructor(word, language, lookUpUrl){
    this.word = word;
    this.language = language;
    this.lookUpUrl = lookUpUrl;
  }

  count(){
    return this.word.length;
  };

  lookup(){
    return this.lookUpUrl + this.word;
  };

};

class EnglishWord extends Word{
  constructor(word){
    super(word, "English", 'https://en.wiktionary.org/wiki/');
  }
}

class JapaneseWord extends Word{
  constructor(word){
    super(word, 'Japanese', 'http://jisho.org/search/');
  }
}

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
