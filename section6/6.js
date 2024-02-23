function solution(n, k) {
  const queue = Array.from({ length: n }, (v, i) => i + 1);

  while (queue.length) {
    for (let i = 1; i < k; i++) {
      // k앞의 두 값 뒤로 이동
      queue.push(queue.shift());
    }

    // k번째 왕자 제외
    queue.shift();

    // 왕자 1명 남으면 종료
    if (queue.length === 1) {
      return queue[0];
    }
  }
}

// test case
console.log(solution(8, 3));
