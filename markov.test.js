let { MarkovMachine } = require('./markov')

describe("markov constructor and instances tests", function () {
  let mm;
  beforeAll(function(){
    console.log("Run before all tests")
    mm = new MarkovMachine('test one two three I am happy two three')
  })

  test('are there words?', function() {
    expect(mm.words).toBeTruthy()
  })
  test('is the words array the correct length?', function(){
    expect(mm.words.length).toEqual(9)
  }) 
  test('there should be no blank spaces', function(){
    expect(mm.words).not.toContain(' ')
  }) 
  test('all the words are properly stored in array', function(){
    expect(mm.words[0]).toEqual('test')
    expect(mm.words[1]).toEqual('one')
    expect(mm.words[2]).toEqual('two')
    expect(mm.words[3]).toEqual('three')
    expect(mm.words[4]).toEqual('I')
    expect(mm.words[5]).toEqual('am')
    expect(mm.words[6]).toEqual('happy')
    expect(mm.words[7]).toEqual('two')
    expect(mm.words[8]).toEqual('three')
  }) 

  test('is makeChains() making a word table correctly', function(){
    console.log(mm.makeChains())
    expect(mm.makeChains()).toHaveProperty('test', ['one'])
    expect(mm.makeChains()).toHaveProperty('one', ['two'])
    expect(mm.makeChains()).toHaveProperty('two', ['three', 'three'])
    expect(mm.makeChains()).toHaveProperty('three', ['I', null])
    expect(mm.makeChains()).toHaveProperty('I', ['am'])
    expect(mm.makeChains()).toHaveProperty('am', ['happy'])
    expect(mm.makeChains()).toHaveProperty('happy', ['two'])

  
})
  test('is markov machine spitting out a result string', function() {
    mm.makeText()
    expect(mm.res).toBeTruthy()
    expect(mm.res.length).toBeGreaterThan(0)
    expect(mm.res.length).toBeLessThanOrEqual(101)
  })
  })

