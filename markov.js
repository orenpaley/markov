/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains()
    this.res = []
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let wordTable = {}
    for (let i =0;i<this.words.length;i++) {
      if (wordTable[this.words[i]]) {
        if (this.words[i+1]) {
          wordTable[this.words[i]].push(this.words[i+1])
        }
        else {
          wordTable[this.words[i]].push(null);
          break;
        }
      }
      else {
        if (this.words[i+1]) {
          wordTable[this.words[i]] = [this.words[i+1]]
        }
        else {
          wordTable[this.words[i]] = [null]
        }
        
      }
    }

    return wordTable
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    while (this.res.length <= numWords)  {
    let wordTable = this.makeChains()
    let keys = Object.keys(wordTable)
    let random = keys[[Math.floor((Math.random() * keys.length))]]
    if (!random) {
      break;
    }
    this.res.push(random)
   
  }
  console.log('RESULT: ', this.res.join(' '))
  return this.res.join(' ')
}
}

module.exports.MarkovMachine = MarkovMachine