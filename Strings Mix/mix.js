/*
Question
  s1 = "my&friend&Paul has heavy hats! &"
  s2 = "my friend John has many many friends &"
  mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

  s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
  s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
  mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

  s1="Are the kids at home? aaaaa fffff"
  s2="Yes they are here! aaaaa fffff"
  mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
*/

const KEY1 = '1';
const KEY2 = '2';

function mix(s1, s2) {
  const map = {};
  buildMap(map, s1, KEY1);
  buildMap(map, s2, KEY2);
  return processMap(map);
}

function buildMap(map, str, key) {
  for (s of str) {
    if (s>='a' && s<='z') {
      if (!map[s]) {
        map[s]={};
        map[s][key]=1;
      } else if (map[s][key]) {
        map[s][key]++
      } else {
        map[s][key]=1;
      }
    }
  }
}

function processMap(map) {
  let ret = [];
  Object.keys(map).forEach((e)=>{
    const cnt1 = map[e][KEY1] || 0;
    const cnt2 = map[e][KEY2] || 0;
    if (cnt1 > 1 || cnt2 > 1) {
      let char = "=";
      let cnt = cnt2;
      if (cnt1 > cnt2) {
        char = KEY1; cnt = cnt1;
      } else if (cnt1 < cnt2) {
        char = KEY2;
      }
      ret.push(`${char}:${Array(cnt).fill(e).join('')}`)
    }
  });
  ret.sort((a, b) => {
    if (b.length !== a.length)
      return b.length > a.length;
    if (b[0] === a[0])
      return a[2] > b[2];
    return b[0] < a[0];
  })
  return ret.join("/");
}
