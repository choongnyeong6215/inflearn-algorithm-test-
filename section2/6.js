function solution(arr) {
  let maxSum = 0;
  let rowSum = 0; // 행 합계
  let colSum = 0; // 열 합계
  let lCrossSum = 0; // ↘︎ 대각선 합
  let rCrossSum = 0; // ↖︎ 대각선 합

  for (let i = 0; i < arr.length; i++) {
    // 행, 열 합계 초기화
    rowSum = colSum = 0;

    lCrossSum += arr[i][i];
    rCrossSum += arr[i][arr[i].length - i - 1];

    for (let j = 0; j < arr[i].length; j++) {
      rowSum += arr[i][j];
      colSum += arr[j][i];
    }
    maxSum = Math.max(rowSum, colSum, lCrossSum, rCrossSum);
  }

  return maxSum;
}

// test case
console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
