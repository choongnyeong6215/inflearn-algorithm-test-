// O (arr1 + arr2)
function solution(arr1, arr2) {
  const answer = [];

  // 각 배열 요소 참조할 포인터
  let pointer1 = 0;
  let pointer2 = 0;

  // 포인터 크기가 참조 중인 배열 크기보다 크면 종료
  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    // 작은 값부터 배열에 추가 (삽입한 요소 포인터 증가)
    if (arr1[pointer1] < arr2[pointer2]) {
      answer.push(arr1[pointer1++]);
    } else if (arr1[pointer1] > arr2[pointer2]) {
      answer.push(arr2[pointer2++]);
    } else if (arr1[pointer1] === arr2[pointer2]) {
      answer.push(arr1[pointer1++]);
    }
  }

  // 남은 요소 있다면 배열에 추가
  while (pointer1 < arr1.length) {
    answer.push(arr1[pointer1++]);
  }

  while (pointer2 < arr2.length) {
    answer.push(arr2[pointer2++]);
  }

  return answer;
}

// test case
let arr1 = [1, 3, 5];
let arr2 = [2, 3, 6, 7, 9];
console.log(solution(arr1, arr2));
