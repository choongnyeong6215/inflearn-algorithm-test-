function solution(bracket) {
  let cnt = 0;
  const stack = [];

  for (let i = 0; i < bracket.length; i++) {
    if (bracket[i] === "(") stack.push(bracket[i]);
    else {
      stack.pop();

      // 레이저인 경우
      if (bracket[i - 1] === "(") cnt += stack.length;
      // 막대기의 끝인 경우
      else cnt += 1;
    }
  }

  return cnt;
}

// test case
console.log(solution("()(((()())(())()))(())"));
console.log(solution("(((()(()()))(())()))(()())"));
