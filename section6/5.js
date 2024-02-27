function solution(bracket) {
  const stack = [];
  let stickCnt = 0;

  for (let i = 0; i < bracket.length; i++) {
    if (bracket[i] === "(") stack.push("(");
    else {
      stack.pop();

      // 레이저인 경우
      if (bracket[i - 1] === "(") stickCnt += stack.length;
      // 쇠막대기인 경우
      else {
        stickCnt++;
      }
    }
  }

  return stickCnt;
}

// test case
console.log(solution("()(((()())(())()))(())"));
console.log(solution("(((()(()()))(())()))(()())"));
