function solution(words) {
  const map = new Map();
  let answer = "";

  for (let word of words) {
    if (map.has(word)) map.set(word, map.get(word) + 1);
    else map.set(word, 1);
  }

  for (let [key, value] of map) {
    if (value > 1) answer += key + value;
    else answer += key;
  }

  return answer;
}

console.log(solution("KKHSSSSSSSE"));
