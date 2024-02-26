// 해시맵 알고리즘 풀이
function solution(vote) {
  const candidates = new Map();

  for (let item of vote) {
    // 투표 이력 있으면 카운팅
    if (candidates.has(item)) {
      candidates.set(item, candidates.get(item) + 1);
    } else {
      candidates.set(item, 1);
    }
  }

  // 선출된 회장
  let president = "";

  // 각 후보 투표 수
  let voteCnt = 0;

  for ([key, value] of candidates) {
    if (voteCnt < value) {
      president = key;
      voteCnt = value;
    }
  }

  return president;
}

// test case
console.log(solution("BACBACCACCBDEDE"));
