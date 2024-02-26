function compareMap(sm, tm) {
  if (sm.size !== tm.size) return false;
  for (const [k, v] of sm) {
    if (!tm.has(k) || tm.get(k) !== v) return false;
  }

  return true;
}

function solution(s, t) {
  const sHash = new Map();
  const tHash = new Map();

  let cnt = 0;

  for (let i = 0; i < t.length; i++) {
    tHash.set(t[i], (tHash.get(t[i]) || 0) + 1);
  }

  let lt = 0;
  for (let rt = 0; rt < s.length; rt++) {
    sHash.set(s[rt], (sHash.get(s[rt]) || 0) + 1);

    while (rt - lt > t.length - 1) {
      sHash.set(s[lt], sHash.get(s[lt]) - 1);
      if (sHash.get(s[lt]) === 0) {
        sHash.delete(s[lt]);
      }
      lt++;
    }

    if (compareMap(sHash, tHash)) cnt++;
  }

  return cnt;
}

// test case
console.log(solution("bacaAacba", "abc"));
