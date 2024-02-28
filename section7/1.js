// 내 풀이
// function solution(arr) {
//   let answer = arr;

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         const tempNum = arr[j];
//         arr[j] = arr[i];
//         arr[i] = tempNum;
//       }
//     }
//   }

//   return answer;
// }

// // test case
// console.log(solution([13, 5, 11, 7, 23, 15]));

// 깅사님 풀이
function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    // 기준 인덱스
    let idx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[idx] > arr[j]) {
        idx = j;
      }

      // 값 교체
      [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
  }

  return answer;
}

// test case
console.log(solution([13, 5, 11, 7, 23, 15]));
