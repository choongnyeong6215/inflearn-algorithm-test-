// O (arr1 + arr2)
function solution(arr1, arr2) {
  const answer = [];

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  const n = arr1.length && arr2.length;

  // 각 배열 참조할 포인터
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < n && pointer2 < n) {
    if (arr1[pointer1] === arr2[pointer2]) {
      answer.push(arr1[pointer1]);

      pointer1++;
      pointer2++;
    } else if (arr1[pointer1] > arr2[pointer2]) {
      pointer2++;
    } else if (arr1[pointer1] < arr2[pointer2]) {
      pointer1++;
    }
  }

  return answer;
}

// test case
console.log(solution(arr1, arr2));
