function solution(bracket) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < bracket.length; i++) {
    if (bracket[i] === "(") {
      stack.push(bracket[i]);
    } else {
      stack.pop();

      // 레이저인 경우
      if (bracket[i - 1] === "(") {
        answer += stack.length;
      } else {
        // 막대기 끝인 경우
        answer += 1;
      }
    }
  }

  return answer;
}

// test case
console.log(solution("()(((()())(())()))(())"));
console.log(solution("(((()(()()))(())()))(()())"));
