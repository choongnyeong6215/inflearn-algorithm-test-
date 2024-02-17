function solution(alphabet) {
  let candidates = new Map();

  // 투표 수 체크
  for (let item of alphabet) {
    if (candidates.has(item)) {
      candidates.set(item, candidates.get(item) + 1);
    } else {
      candidates.set(item, 1);
    }
  }

  let voteCnt = Number.MIN_SAFE_INTEGER;
  let president = "";

  // 투표 수 가장 많은 인원 리턴
  for (let [key, value] of candidates) {
    if (value > voteCnt) {
      voteCnt = value;
      president = key;
    }
  }

  return president;
}

// test case
console.log(solution("BACBACCACCBDEDE"));
