/*
  Complete the solution so that it strips all text that follows any of a set of comment markers passed in. 
  Any whitespace at the end of the line should also be stripped out.

  var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
  // result should == "apples, pears\ngrapes\nbananas"
*/

function solution(input, markers) {
    const reg = new RegExp(`(\\s[${markers.join('')}].*)$`, 'gm');
    return input.replace(reg, '');
};
