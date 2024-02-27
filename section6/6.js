function solution(n, k) {
  const princes = Array.from({ length: n }, (v, i) => i + 1);

  // 왕자 한명 남을때까지
  while (princes.length > 0) {
    // k번째 왕자 탈락 처리
    for (let i = 1; i < k; i++) {
      princes.push(princes.shift());
    }

    princes.shift();

    // 한명 남은 경우
    if (princes.length === 1) return princes[0];
  }
}

// test case
console.log(solution(8, 3));
