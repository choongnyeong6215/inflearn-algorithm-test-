function solution(words) {
  const stack = [];

  for (let item of words) {
    if (item !== ")") {
      stack.push(item);
    } else {
      // 괄호 한쌍 없어질때까지 문자열 제거
      while (stack.pop() !== "(");
    }
  }

  return stack.join("");
}

// test case
console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
console.log(solution("(AB(A))B((A))"));
