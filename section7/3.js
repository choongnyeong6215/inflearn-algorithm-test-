// // 최초 풀이
// function solution(arr) {
//   const plus = [];
//   const minus = [];

//   for (let num of arr) {
//     if (num < 0) {
//       minus.push(num);
//     } else {
//       plus.push(num);
//     }
//   }

//   return [...minus, ...plus];
// }

// 버블정렬 응용 풀이
function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return answer;
}

// test case
console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]));
