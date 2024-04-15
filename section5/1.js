// O (arr1 + arr2)
function solution(arr1, arr2) {
  const answer = [];

  let p1 = 0; // arr1 참조
  let p2 = 0; // arr2 참조

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }

  // 남은 요소 체크
  while (p1 < arr1.length) {
    answer.push(arr1[p1++]);
  }

  while (p2 < arr2.length) {
    answer.push(arr2[p2++]);
  }

  return answer;
}

// test case
let arr1 = [1, 3, 5];
let arr2 = [2, 3, 6, 7, 9];
console.log(solution(arr1, arr2));
