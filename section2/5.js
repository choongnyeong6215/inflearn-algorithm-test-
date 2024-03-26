function solution(arr) {
  let grade = Array.from({ length: arr.length }).fill(1);

  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) grade[i]++;
    }
  }

  return grade;
}

// test case
console.log(solution([87, 89, 92, 100, 76]));
console.log(solution([92, 92, 92, 100, 75]));
