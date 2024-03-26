function solution(students) {
  // 맨 앞 학생은 보임
  let stdHeight = students[0];
  let canSeeCnt = 1;

  for (let i = 1; i < students.length; i++) {
    if (students[i] > stdHeight) {
      canSeeCnt++;
      stdHeight = students[i];
    }
  }

  return canSeeCnt;
}

// test case
console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
