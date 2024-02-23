function solution(essential, subject) {
  const queue = [...essential];

  for (let item of subject) {
    if (queue.includes(item)) {
      // 순회중인 아이템과 스택 첫 요소가 같지 않으면 잘못 설계된 수업계획으로 간주
      if (item !== queue.shift()) {
        return "NO";
      }
    }
  }

  // 큐에 요소가 남아있으면 필수과목을 선택하지 않았음으로 잘못 설계된 수업계획임
  return queue.length ? "NO" : "YES";
}

// test case
console.log(solution("CBA", "CBDAGE"));
console.log(solution("ABC", "ABCC"));
console.log(solution("EWQ", "EQW!@#"));
