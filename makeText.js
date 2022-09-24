/** Command-line tool to generate Markov text. */

let markov = require('./markov')
let process = require('process')
let fs = require('fs')
let axios = require('axios').default

async function generateMarkov() {
  if (process.argv[2] == 'file') {
    file = '.' + '/' + process.argv[3]
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        console.error(`err generated from reading ${file} => ${err}`)
        process.exit(1)
      }
      else {
        
        let mm = new markov.MarkovMachine(data)
        mm.makeText()   
      }}) 
    }
    if (process.argv[2] == 'url') {
      try {
        res = await axios.get(process.argv[3])
      
      }
      catch {
        console.error(`cannot parse data from url given ${process.argv[3]}`)
      }
      console.log('url data: ',res.data.slice(0,30))
      let mm = new markov.MarkovMachine(res.data)
      mm.makeText()
    }
}

generateMarkov()



