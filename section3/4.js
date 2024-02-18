function solution(s, t) {
  let distance = [];
  let point = 1000;

  // → 방향
  for (let i = 0; i < s.length; i++) {
    // t와 같지 않을 경우 포인트 증가
    if (s[i] === t) {
      point = 0;
    } else {
      point++;
    }

    distance.push(point);
  }

  // 포인트 초기화
  point = 1000;

  // ← 방향
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      point = 0;
    } else {
      point++;
    }

    // ←, →중 가장 작은 값 리턴
    distance[i] = Math.min(distance[i], point);
  }

  return distance;
}

console.log(solution("teachermode", "e"));
