function solution(vote) {
  let votes = new Map();
  let maxVotes = Number.MIN_SAFE_INTEGER;
  let president = "";

  for (let v of vote) {
    if (votes.has(v)) votes.set(v, votes.get(v) + 1);
    else votes.set(v, 1);
  }

  for (let [curPresident, vote] of votes) {
    if (vote > maxVotes) {
      maxVotes = vote;
      president = curPresident;
    }
  }

  return president;
}

// test case
console.log(solution("BACBACCACCBDEDE"));
