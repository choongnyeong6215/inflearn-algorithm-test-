function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;

  const timeLine = [];

  for (let item of arr) {
    // 참석시간 : S, 떠난시간 : E
    timeLine.push([item[0], "S"]);
    timeLine.push([item[1], "E "]);
  }

  // 참석, 종료시간 같으면 종료시간이 먼저 오도록 정렬
  timeLine.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();

    return a[0] - b[0];
  });

  let cnt = 0;

  for (let item of timeLine) {
    if (item[1] === "S") cnt++;
    else cnt--;

    answer = Math.max(answer, cnt);
  }

  return answer;
}

// test case
console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
