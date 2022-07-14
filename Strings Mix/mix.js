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
