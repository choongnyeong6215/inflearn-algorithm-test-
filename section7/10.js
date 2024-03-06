// 내 풀이 O (n)
// function solution(arr, m) {
//   arr.sort((a, b) => a - b);

//   return arr.findIndex((v) => v === m) + 1;
// }

// test case
// console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32));

// 이진탐색 풀이 O (log n)
function solution(m, arr) {
  let answer = 0;
  let lt = 0;
  let rt = arr.length - 1;

  arr.sort((a, b) => a - b);

  // 서로의 영역을 벗어나지 않는 경우만 유효
  while (lt <= rt) {
    const stdIdx = Math.floor((lt + rt) / 2);

    if (arr[stdIdx] === m) {
      answer = stdIdx + 1;
      break;
    } else if (arr[stdIdx] > m) {
      rt = stdIdx - 1;
    } else {
      lt = stdIdx + 1;
    }
  }

  return answer;
}

// test case
console.log(solution(32, [23, 87, 65, 12, 57, 32, 99, 81]));
