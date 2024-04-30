function solution(bracket) {
  const stack = [];

  if (stack[0] === "(") return "NO";

  for (let item of bracket) {
    if (item === "(") stack.push("(");
    else stack.pop();
  }

  return stack.length ? "NO" : "YES";
}

// test case
console.log(solution("(()(()))(()"));
console.log(solution("((()))()"));
