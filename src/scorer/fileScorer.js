var cheerio = require('../../vendor/cheerio/');

const countElements = (string) => {
  const scoredElems = ['div', 'p', 'h1', 'h2', 'html', 'body', 'header', 'footer', 'font', 'center', 'big', 'strike', 'tt', 'frameset', 'frame'];
  // get the DOM
  $ = cheerio.load(string);
  // Store DOM tags in array
  const tags = $("*").toArray().map(object => object.name);
  return tags.reduce((mem, curEl) => {
    if (!scoredElems.includes(curEl)) {
      return mem;
    }
    if (!mem.hasOwnProperty(curEl)) {
      mem[curEl] = 0;
    }
    mem[curEl]++;
    return mem;
  }, {})
}

const scorerElems = (contents) => {
  let score = 0;
  const scoreValues = {div: 3, p: 1, h1: 3, h2: 2, html: 5, body: 5, header: 10, footer: 10, font: -1, center: -2, big: -2, strike: -1, tt: -2, frameset: -5, frame: -5};
  for (let key in contents) {
    // increment score according to frequecy and rules
    score += ( contents[key] * scoreValues[key] );
  }
  return score;
}

const getScore = (str) => {
  const els = countElements(str);
  const score = scorerElems(els);
  return score;
}

module.exports = getScore;
