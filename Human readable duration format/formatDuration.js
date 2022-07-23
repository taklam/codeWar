/*
  The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, 
  the duration is expressed as a combination of years, days, hours, minutes and seconds.

  It is much easier to understand with an example:

  * For seconds = 62, your function should return 
      "1 minute and 2 seconds"
  * For seconds = 3662, your function should return
      "1 hour, 1 minute and 2 seconds"
  For the purpose of this Kata, a year is 365 days and a day is 24 hours.

  Note that spaces are important.
*/

function formatDuration(seconds) {
    if (!seconds)
        return 'now';
    const numToStrMap = [
        [31536000, 'year'],
        [86400, 'day'],
        [3600, 'hour'],
        [60, 'minute'],
        [1, 'second']
    ];
    let ret = [];
    for ([key, val] of numToStrMap) {
        if (seconds >= key) {
            let tmp = Math.floor(seconds / key);
            ret.push(`${tmp} ${val}${tmp > 1 ? "s" : ""}`);
            seconds %= key;
        }
    }
    if (ret.length == 1)
        return ret[0];

    let lastWord = ret.pop()
    return ret.join(", ") + " and " + lastWord;
}
