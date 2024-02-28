function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }

  return answer;
}

// test case
console.log(solution([11, 7, 5, 6, 10, 9]));
