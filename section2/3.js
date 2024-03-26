function solution(per1, per2) {
  const stage = per1.length && per2.length;
  const result = [];

  for (let i = 0; i < stage; i++) {
    // DRAW
    if (per1[i] === per2[i]) result.push("D");
    // Per1 WIN
    else if (
      (per1[i] === 1 && per2[i] === 3) ||
      (per1[i] === 2 && per2[i] === 1) ||
      (per1[i] === 3 && per2[i] === 2)
    )
      result.push("A");
    // per2 WIN
    else result.push("B");
  }

  return result;
}

// test case
console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
