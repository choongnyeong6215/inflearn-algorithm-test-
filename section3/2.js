function solution(words) {
  const alpha = words
    .toLowerCase()
    .split("")
    .filter((v) => /[a-z]/g.test(v))
    .join("");

  const revAlpha = [...alpha].reverse().join("");

  return alpha === revAlpha ? "YES" : "NO";
}

// test case
console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));
