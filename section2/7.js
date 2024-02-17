function solution(arr) {
  let bongCnt = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let stdBong = arr[i][j]; // 현재 봉우리
      let topNum = i > 0 ? arr[i][j] : 0; // 상
      let bottomNum = i < arr.length - 1 ? arr[i + 1][j] : 0; // 하
      let leftNum = arr[i][j - 1] ?? 0; // 좌
      let rightNum = arr[j][j + 1] ?? 0; // 우

      let BongArr = [stdBong, topNum, bottomNum, leftNum, rightNum];

      if (stdBong === BongArr.sort((a, b) => b - a)[0]) {
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
