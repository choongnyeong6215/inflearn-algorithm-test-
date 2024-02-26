function solution(m, arr) {
  let sum = 0;
  let cnt = 0;

  // 각 요소 참조할 포인터
  let pointer1 = 0;
  let pointer2 = 0;

  for (pointer2; pointer2 < arr.length; pointer2++) {
    sum += arr[pointer2];

    // m보다 작도록 합계 조절
    while (sum > m) {
      sum -= arr[pointer1++];
    }

    cnt += pointer2 - pointer1 + 1;
  }

  return cnt;
}

// test case
console.log(solution(5, [1, 3, 1, 2, 3]));
