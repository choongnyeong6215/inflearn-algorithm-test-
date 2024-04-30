function solution(essential, subject) {
  const essSub = [...essential];

  for (let item of subject) {
    // 필수과목 신청했다면 필수과목 리스트와 순서 체크
    if (essSub.includes(item)) {
      if (essSub.shift() !== item) return "NO";
    }
  }

  // 필수과목 리스트 남아있다면 수강청 제대로 못한 것으로 간주
  return essSub.length ? "NO" : "YES";
}

// test case
console.log(solution("CBA", "CBDAGE"));
console.log(solution("ABC", "ABCC"));
console.log(solution("EWQ", "EQW!@#"));
