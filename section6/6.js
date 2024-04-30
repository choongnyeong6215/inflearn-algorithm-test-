function solution(n, k) {
  const princes = Array.from({ length: n }, (v, i) => i + 1);

  while (princes.length) {
    for (let i = 1; i < k; i++) {
      princes.push(princes.shift());
    }

    // k번째 왕자 제거
    princes.shift();

    if (princes.length === 1) return princes[0];
  }
}

// test case
console.log(solution(8, 3));
