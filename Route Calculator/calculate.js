/*

  You will be passed a string of any length containing numbers and operators:

  '+' = add
  '-' = subtract
  '*' = multiply
  '$' = divide
  Your task is to break the string down and calculate the expression using this order of operations. (division => multiplication => subtraction => addition)

  If you are given an invalid input (i.e. any character except .0123456789+-*$) you should return the error message:'400: Bad request'

  Remember:
  - The number of operations isn't limited
  - Order of operations is imperative
  - No eval or equivalent functions
  - convert the number to floats, not to integers

  Examples:

  calculate('1+1')     => '2'
  calculate('10$2')    => '5'
  calculate('1.5*3')   => '4.5'

  calculate('5+5+5+5') => '20'

  calculate('1000$2.5$5+5-5+6$6') =>'81'

  calculate('10-9p')   =>  '400: Bad request'
*/

const REGEX_NUM = '(-?\\d+[.]?\\d*(?:e[+-]?\\d+)?)';

function calculate(sum) {
    const matches = sum.match(/[^0-9\.\+\-\*$]/);
    if (matches !== null)
        return '400: Bad request';

    let str = sum;
    ['$', '*', '-', '+'].forEach((symbol) => {
        str = handleSymbol(str, symbol);
    });
    return parseFloat(str);
}

function handleSymbol(str, symbol) {
    const regex = new RegExp(`${REGEX_NUM}\\${symbol}${REGEX_NUM}`)
    const matches = str.match(regex);
    if (!matches)
        return str;
    const [rest, n1, n2] = matches;
    const sum = cal(n1, n2, symbol);
    let newStr = str.replace(rest, sum);
    return handleSymbol(newStr, symbol);
}

function cal(num1, num2, symbol) {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    switch (symbol) {
        case '+': return n1 + n2;
        case '-': return n1 - n2;
        case '*': return n1 * n2;
        case '$': return n1 / n2;
    }
}
