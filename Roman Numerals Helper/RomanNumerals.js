const map = {
    M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
};

class RomanNumerals {
    static toRoman(num) {
        let ret = "";
        Object.entries(map)
            .reduce((total, [roman, num], idx, arr) => {
                while (total >= num) {
                    total -= num;
                    ret += roman;
                }
                return total;
            }, num);
        return ret;
    }
    static fromRoman(str) {
        return str.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((total, val) => {
            return total += map[val];
        }, 0);
    }
}
