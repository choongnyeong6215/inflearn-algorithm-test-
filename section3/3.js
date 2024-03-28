function solution(words) {
  return Number(
    words
      .split("")
      .filter((v) => /\d/.test(v))
      .join("")
  );
}

// test case
console.log(solution("g0en2T0s8eSoft"));
console.log(solution("a1b2c3d4e5"));
