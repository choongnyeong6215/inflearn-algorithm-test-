function solution(words) {
  let stack = [];

  for (let item of words) {
    if (item === ")") {
      // 괄호 한 쌍 없어질 때까지 문자열 제거
      while (stack.pop() !== "(");
    } else {
      stack.push(item);
    }
  }

  return stack.join("");
}

// test case
console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
