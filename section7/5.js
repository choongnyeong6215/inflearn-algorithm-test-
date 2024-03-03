function solution(s, arr) {
  const cache = Array.from({ length: s }, () => 0);

  for (let i = 0; i < arr.length; i++) {
    // Cache Miss
    if (!cache.includes(arr[i])) {
      cache.unshift(arr[i]);
      cache.pop();
    }
    // Cache Hit
    else {
      const idx = cache.indexOf(arr[i]);
      const tmp = cache[idx];
      // 맨 앞으로 이동
      cache.splice(idx, 1);
      cache.unshift(tmp);
    }
  }

  return cache;
}

// test case
console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
