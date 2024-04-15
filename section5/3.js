function solution(m, arr) {
  let sum = 0;
  let cnt = 0;

  // arr 참조할 포인터
  let p1 = 0;
  let p2 = 0;

  for (p2; p2 < arr.length; p2++) {
    sum += arr[p2];

    if (sum === m) {
      cnt++;

      sum -= arr[p1++];
    }

    while (sum > m) {
      sum -= arr[p1++];

      if (sum === m) {
        cnt++;

        sum -= arr[p1++];
      }
    }
  }
  return cnt;
}

// test case
console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));
