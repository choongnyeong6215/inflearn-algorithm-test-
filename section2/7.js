function solution(arr) {
  let bongCnt = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const curLocation = arr[i][j]; // 현 위치
      const top = i > 0 ? arr[i - 1][j] : 0; // 상
      const bottom = i < arr.length - 1 ? arr[i + 1][j] : 0; // 하
      const left = j > 0 ? arr[i][j - 1] : 0; // 좌
      const right = j < arr.length - 1 ? arr[i][j + 1] : 0; // 우

      if (curLocation === Math.max(curLocation, top, bottom, left, right)) {
        bongCnt++;
      }
    }
  }

  return bongCnt;
}

// test case
console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
