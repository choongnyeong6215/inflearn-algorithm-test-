function solution(essential, subject) {
  const queue = [...essential];

  for (let item of subject) {
    // 필수과목 신청했다면 순서 일치한지 확인 (큐 지워가며 체크)
    if (queue.includes(item)) {
      if (item !== queue.shift()) return "NO";
    }
  }

  // 큐에 요소가 남으면 필수과목 신청 안한 것으로 간주
  return queue.length ? "NO" : "YES";
}

// test case
console.log(solution("CBA", "CBDAGE"));
console.log(solution("ABC", "ABCC"));
console.log(solution("EWQ", "EQW!@#"));
