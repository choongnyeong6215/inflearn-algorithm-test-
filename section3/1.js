function solution(words) {
  const orgWords = words.toLowerCase();
  const revWords = [...orgWords].reverse().join("");

  return orgWords === revWords ? "YES" : "NO";
}

// test case
console.log(solution("gooG"));
console.log(solution("halo"));
