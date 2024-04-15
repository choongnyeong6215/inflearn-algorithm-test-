function solution(words1, words2) {
  const firstWordMap = new Map();
  const secondWordMap = new Map();

  for (let txt of words1) {
    if (firstWordMap.has(txt)) firstWordMap.set(txt, firstWordMap.get(txt) + 1);
    else firstWordMap.set(txt, 1);
  }

  for (let txt of words2) {
    if (secondWordMap.has(txt))
      secondWordMap.set(txt, secondWordMap.get(txt) + 1);
    else secondWordMap.set(txt, 1);
  }
  for (let [key, value] of firstWordMap) {
    if (secondWordMap.has(key)) {
      if (firstWordMap.get(key) !== secondWordMap.get(key)) return "NO";
    } else {
      return "NO";
    }
  }

  return "YES";
}

// test case
console.log(solution("AbaAeCe", "baeeACA"));
console.log(solution("abaCC", "Caaab"));
