function count(arr, c) {
  let cnt = 1;
  let endPosition = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - endPosition >= c) {
      cnt++;
      endPosition = arr[i];
    }
  }

  return cnt;
}

function solution(c, arr) {
  arr.sort((a, b) => a - b);

  let answer = 0;
  let lt = 1;
  let rt = arr[arr.length - 1];

  while (lt <= rt) {
    let std = Math.floor((lt + rt) / 2);

    if (count(arr, std) >= c) {
      answer = std;
      lt = std + 1;
    } else {
      rt = std - 1;
    }
  }

  return answer;
}

// test case
console.log(solution(3, [1, 2, 8, 4, 9]));
