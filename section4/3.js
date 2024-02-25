function solution(n, m, test) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      // 테스트 횟수
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let mento = 0;
        let menti = 0;
        // 등수
        for (let s = 0; s < n; s++) {
          // 멘토, 멘티 등수 구하기
          if (test[k][s] === i) mento = s;
          if (test[k][s] === j) menti = s;
        }

        // 멘토 등수가 더 낮아야함
        if (mento < menti) cnt++;
      }

      if (cnt === m) answer++;
    }
  }

  return answer;
}

// test case

const arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.log(solution(4, 3, arr));
