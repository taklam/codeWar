/*
  Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

  For example:

  nextSmaller(21) == 12
  nextSmaller(531) == 513
  nextSmaller(2071) == 2017
  Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

  nextSmaller(9) == -1
  nextSmaller(111) == -1
  nextSmaller(135) == -1
  nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
*/

function nextSmaller(inputN) {
    const strN = "" + inputN;
    if (strN.length === 1)
        return -1;
    let ret = sortLastTwoDigitAsce(strN);
    if (ret < inputN)
        return ret;
    for (let i = 3; i <= strN.length; i++) {
        ret = sortLastNDigitDesc(strN, i);
        if (ret < inputN)
            return ret;
    }
    return -1;
}

function sortLastTwoDigitAsce(strN) {
    const len = strN.length;
    if (len < 2)
        return strN;

    let ret = strN.substring(0, len - 2) + strN.substring(len - 2).split("").sort().join("");
    if (!ret.startsWith('0'))
        return parseInt(ret);   
}

function sortLastNDigitDesc(strN, n) {
    const len = strN.length;
    if (len < n) 
        return strN;

    const arrInDesc = strN.substring(len - n).split("").sort((a, b) => (a > b ? -1 : 1));
    const uniqueArr = [...new Set(arrInDesc)];
    if (uniqueArr.length < 1)
        return strN;

    let idx = findNextSmallerFromArr(uniqueArr, strN[len - n]);
    if (idx === -1)
        return strN;

    delete arrInDesc[arrInDesc.indexOf(uniqueArr[idx])];
    let ret = strN.substring(0, len - n) + uniqueArr[idx] + arrInDesc.join("");
    if (!ret.startsWith('0'))
        return parseInt(ret);
}

function findNextSmallerFromArr(uniqueArrInDesc, n) {
    let idx = uniqueArrInDesc.indexOf(n);
    if (idx < uniqueArrInDesc.length - 1)
        return idx + 1;
    return -1;
}
