function solution(arr) {
  let accmScore = 0;
  let totalScore = 0;

  for (let num of arr) {
    if (num === 1) {
      accmScore++;
      totalScore += accmScore;
    } else {
      accmScore = 0;
    }
  }

  return totalScore;
}

// test case
console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
console.log(solution([0, 0, 1, 1, 1, 0, 0, 0, 0, 0]));
