function solution(words) {
  const stack = [];

  for (let item of words) {
    if (item === ")") while (stack.pop() !== "(");
    else stack.push(item);
  }

  return stack.join("");
}

// test case
console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
console.log(solution("(AB(A))B((A))"));
