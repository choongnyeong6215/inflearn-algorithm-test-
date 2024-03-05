function solution(arr) {
  arr.sort((a, b) => {
    // 시작시간, 종료시간 같은 경우 시작시간 기준으로 정렬
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let cnt = 0;
  let meetingEndTime = 0;

  arr.forEach((v) => {
    // 회의 시작시간이 이전 회의 종료시간 이상이면 가능
    if (v[0] >= meetingEndTime) {
      cnt++;
      meetingEndTime = v[1];
    }
  });

  return cnt;
}

// test case
console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);

console.log(
  solution([
    [3, 3],
    [1, 3],
    [2, 3],
  ])
);
