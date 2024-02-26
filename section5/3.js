function solution(m, arr) {
  let sum = 0;
  let cnt = 0;

  // 각 요소 참조할 포인터
  let pointer1 = 0;
  let pointer2 = 0;

  for (pointer2; pointer2 < arr.length; pointer2++) {
    sum += arr[pointer2];

    // m과 같은 경우
    if (sum === m) {
      cnt++;

      // pointer1 참조값 제거
      sum -= arr[pointer1++];
    }

    // m보다 큰 경우
    while (sum > m) {
      sum -= arr[pointer1++];

      if (sum === m) {
        cnt++;
      }
    }
  }

  return cnt;
}

// test case
console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));
