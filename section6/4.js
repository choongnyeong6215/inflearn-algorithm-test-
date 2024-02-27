function solution(calculation) {
  const stack = [];

  for (let item of calculation) {
    if (/\d/.test(item)) {
      stack.push(Number(item));
    } else {
      const b = stack.pop(); // 연산자 기준 우측 값
      const a = stack.pop(); // 연산자 기준 좌측 값

      if (item === "+") stack.push(a + b);
      else if (item === "-") stack.push(a - b);
      else if (item === "*") stack.push(a * b);
      else if (item === "/") stack.push(a / b);
    }
  }

  return stack;
}

// test case
console.log(solution("352+*9-"));
