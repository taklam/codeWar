/*
  Write a function that, given a string of text (possibly with punctuation and line-breaks), 
  returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

  top_3_words("In a village of La Mancha, the name of which I have no desire to call to
  mind, there lived not long since one of those gentlemen that keep a lance
  in the lance-rack, an old buckler, a lean hack, and a greyhound for
  coursing. An olla of rather more beef than mutton, a salad on most
  nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
  on Sundays, made away with three-quarters of his income.")
  # => ["a", "of", "on"]

  top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
  # => ["e", "ddd", "aa"]

  top_3_words("  //wont won't won't")
  # => ["won't", "wont"]
*/

function topThreeWords(text) {
    const map = {};
    text.toLowerCase().replace(/([a-z][a-z']*)/g, match => { map[match] ? map[match]++ : map[match] = 1; })
    return Object.entries(map).sort((a, b) => b[1] - a[1]).map((e) => e[0]).slice(0, 3);
}
