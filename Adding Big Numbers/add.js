/*
  Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
  The input numbers are big.
  The input is a string of only digits
  The numbers are positives
  
  add("123", "321"); -> "444"
  add("11", "99");   -> "110"
  add('63829983432984289347293874', '90938498237058927340892374089') -> "91002328220491911630239667963"
*/

function add(a, b) {
    var res = '', c = 0
    a = a.split('')
    b = b.split('')
    while (a.length || b.length || c) {
        c += Number(a.pop() || 0) + Number(b.pop() || 0)
        res = c % 10 + res
        c = (c > 9) ? 1 : 0
    }
    return res
}
