function solution(words1, words2) {
  let firstWordMap = new Map();
  let secondWordMap = new Map();

  let answer = "";

  for (let item of words1) {
    if (firstWordMap.has(item)) {
      firstWordMap.set(item, firstWordMap.get(item) + 1);
    } else {
      firstWordMap.set(item, 1);
    }
  }

  for (let item of words2) {
    if (secondWordMap.has(item)) {
      secondWordMap.set(item, secondWordMap.get(item) + 1);
    } else {
      secondWordMap.set(item, 1);
    }
  }

  for (let [key, value] of firstWordMap) {
    if (secondWordMap.has(key) && secondWordMap.get(key) === value) {
      answer = "YES";
    } else {
      answer = "NO";
    }
  }

  return answer;
}

// test case
console.log(solution("AbaAeCe", "baeeACA"));
console.log(solution("abaCC", "Caaab"));
