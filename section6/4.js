function solution(calculation) {
  const stack = [];

  for (let item of calculation) {
    if (/\d/.test(item)) {
      stack.push(Number(item));
    } else {
      const sNum = stack.pop();
      const fNum = stack.pop();

      if (item === "+") stack.push(fNum + sNum);
      if (item === "-") stack.push(fNum - sNum);
      if (item === "*") stack.push(fNum * sNum);
      if (item === "/") stack.push(fNum / sNum);
    }
  }

  return stack;
}

// test case
console.log(solution("352+*9-"));
