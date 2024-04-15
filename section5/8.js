function compareMaps(sMap, tMap) {
  if (sMap.size !== tMap.size) return false;

  for (let [key, value] of sMap) {
    if (!tMap.has(key) || tMap.get(key) !== value) return false;
  }

  return true;
}

function solution(s, t) {
  let cnt = 0;
  let sMap = new Map();
  let tMap = new Map();

  for (let item of t) {
    if (tMap.has(item)) tMap.set(item, tMap.get(item) + 1);
    else tMap.set(item, 1);
  }

  for (let i = 0; i < t.length - 1; i++) {
    if (sMap.has(s[i])) sMap.set(s[i], sMap.get(s[i]) + 1);
    else sMap.set(s[i], 1);
  }

  let p1 = 0;

  for (let p2 = t.length - 1; p2 < s.length; p2++) {
    if (sMap.has(s[p2])) sMap.set(s[p2], sMap.get(s[p2]) + 1);
    else sMap.set(s[p2], 1);

    if (compareMaps(sMap, tMap)) cnt++;

    sMap.set(s[p1], sMap.get(s[p1]) - 1);
    if (sMap.get(s[p1]) === 0) sMap.delete(s[p1++]);
  }

  return cnt;
}

// test case
console.log(solution("bacaAacba", "abc")); // 3
console.log(solution("AbcDecbDc", "bcD")); // 3
