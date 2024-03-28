function solution(s, t) {
  const dist = [];
  let p = 1000;

  // →
  for (let item of s) {
    if (item === t) p = 0;
    else p++;

    dist.push(p);
  }

  p = 1000;

  // ←
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else p++;

    dist[i] = Math.min(dist[i], p);
  }

  return dist;
}

console.log(solution("teachermode", "e"));
