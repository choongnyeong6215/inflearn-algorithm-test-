function solution(n, k, card) {
  const sum = new Set();

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        sum.add(arr[i] + arr[j] + arr[k]);
      }
    }
  }

  return Array.from(sum).sort((a, b) => b - a)[k - 1];
}

// test case
let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
