function solution(words) {
  let answer = "";
  let map = new Map();

  for (let i = 0; i < words.length; i++) {
    if (map.has(words[i])) {
      map.set(words[i], map.get(words[i]) + 1);
    } else {
      map.set(words[i], 1);
    }
  }

  for (let [key, value] of map) {
    // 반복횟수 2 이상인 경우 체크
    if (value >= 2) {
      answer += key + value;
    } else {
      answer += key;
    }
  }

  return answer;
}

console.log(solution("KKHSSSSSSSE"));
