function solution(arr) {
  let maxSum = 0;

  let leftBottomSum = 0; // 좌 - 하
  let rightBottomSum = 0; // 우 - 하

  // 두 대각선 합계 (고정)
  for (let i = 0; i < arr.length; i++) {
    leftBottomSum += arr[i][i];
    rightBottomSum += arr[i][arr.length - i - 1];
  }

  for (let i = 0; i < arr.length; i++) {
    let rowSum = 0; // 행
    let colSum = 0; // 열

    for (let j = 0; j < arr[i].length; j++) {
      rowSum += arr[i][j];
      colSum += arr[j][i];
    }

    maxSum = Math.max(rowSum, colSum, leftBottomSum, rightBottomSum);
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
