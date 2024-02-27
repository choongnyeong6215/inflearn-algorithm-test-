function solution(bracket) {
  const stack = [];

  for (let item of bracket) {
    if (item === "(") {
      stack.push(item);
    } else {
      // 한 쌍 제거
      stack.pop();
    }
  }

  return stack.length ? "NO" : "YES";
}

// test case
console.log(solution("(()(()))(()"));
console.log(solution("((()))()"));
