function solution(tests) {
  let n = tests[0].length; // 학생 수
  let m = tests.length; // 테스트 횟수
  let cnt = 0;

  const mates = [];

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      mates.push([i, j]);
    }
  }

  for (let [mento, menti] of mates) {
    let isMate = true;

    for (let test of tests) {
      const mentoRank = test.indexOf(mento);
      const mentiRank = test.indexOf(menti);

      if (mentoRank >= mentiRank) {
        isMate = false;
        break;
      }
    }
    if (isMate) cnt++;
  }
  return cnt;
}

// test case
const arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.log(solution(arr));
