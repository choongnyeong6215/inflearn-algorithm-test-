// 해시맵 알고리즘 풀이
function solution(words1, words2) {
  const firstWordMap = new Map();
  const secondWordMap = new Map();

  let answer = "YES";

  // 단어 구성 문자열 판별
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

  // 아나그램 판단
  for ([key, value] of firstWordMap) {
    if (secondWordMap.has(key) && secondWordMap.get(key) === value) {
      answer = "YES";
    } else {
      return "NO";
    }
  }

  return answer;
}

// test case
console.log(solution("AbaAeCe", "baeeACA"));
console.log(solution("abaCC", "Caaab"));
