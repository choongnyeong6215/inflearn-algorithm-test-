function solution(arr) {
  const sortedArr = [...arr].sort((a, b) => a - b);
  const answer = [];

  arr.forEach((v, idx) => {
    // 정렬된 배열과 위치 다르면 자리 바꾼 것으로 간주
    if (v !== sortedArr[idx]) answer.push(idx + 1);
  });

  return answer;
}

// test case
console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(solution([120, 130, 150, 150, 130, 150]));
