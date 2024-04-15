function solution(m, arr) {
  let sum = 0;
  let cnt = 0;

  // arr 참조할 포인터
  let p1 = 0;
  let p2 = 0;

  for (p2; p2 < arr.length; p2++) {
    sum += arr[p2];

    while (sum > m) {
      sum -= arr[p1++];
    }

    cnt += p2 - p1 + 1;
  }

  return cnt;
}

// test case
console.log(solution(5, [1, 3, 1, 2, 3]));
