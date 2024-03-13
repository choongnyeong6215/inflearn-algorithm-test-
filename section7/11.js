// 필요 DVD 갯수 체크
function count(songs, capacity) {
  let cnt = 1;
  let sum = 0;

  for (let item of songs) {
    if (sum + item > capacity) {
      cnt++;
      sum = item;
    } else {
      sum += item;
    }
  }

  return cnt;
}

function solution(m, arr) {
  let answer = 0;
  let lt = Math.max(...arr); // 최대 노래 길이
  let rt = arr.reduce((accr, curv) => accr + curv, 0); // 총 노래 길이

  // 이분탐색
  while (lt <= rt) {
    let capacity = Math.floor((lt + rt) / 2);

    if (count(arr, capacity) <= m) {
      answer = capacity;
      rt = capacity - 1;
    } else {
      lt = capacity + 1;
    }
  }

  return answer;
}

// test case
console.log(solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
