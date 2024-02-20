function solution(calculation) {
  let stack = [];

  for (let item of calculation) {
    if (/\d/.test(item)) {
      stack.push(Number(item));
    } else {
      // 계산에 필요한 숫자
      const b = stack.pop();
      const a = stack.pop();

      if (item === "+") {
        stack.push(a + b);
      } else if (item === "-") {
        stack.push(a - b);
      } else if (item === "*") {
        stack.push(a * b);
      } else if (item === "/") {
        stack.push(a / b);
      }
    }
  }

  return stack[0];
}

// test case
console.log(solution("352+*9-"));
