// function solution(arr) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   let timeLine = [];

//   for (let item of arr) {
//     // 참석시간 : S, 떠난시간 : E로 구분
//     timeLine.push([item[0], "S"]);
//     timeLine.push([item[1], "E"]);
//   }

//   timeLine.sort((a, b) => {
//     if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
//     else return a[0] - b[0];
//   });

//   let cnt = 0;

//   for (let item of timeLine) {
//     if (item[1] === "S") cnt++;
//     else cnt--;

//     answer = Math.max(answer, cnt);
//   }

//   return answer;
// }

function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let timeLine = [];

  for (let item of arr) {
    // 참석시간 : S, 떠난시간 : E
    timeLine.push([item[0], "S"]);
    timeLine.push([item[1], "E"]);
  }

  timeLine.sort((a, b) => {
    // 참석시간, 떠나는 시간 겹치는 경우 떠나는 시간 먼저 위치하도록
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
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
