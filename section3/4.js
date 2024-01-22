function solution(s, t) {
    let dist = 1000;
    let answer = [];

    // → 방향
    for(let i = 0; i < s.length; i++) {
        if(s[i] === t) {
            dist = 0;
        }
        else {
            dist++;
        }
        answer.push(dist);
    }

    // 초기화
    dist = 1000;

    // ← 방향
    for(let i = s.length-1; i >= 0; i--) {
        if(s[i] === t) {
            dist = 0;
        }
        else {
            dist++;

            answer[i] = Math.min(answer[i], dist);
        }
    }

    return answer;
}


// test case
console.log(solution("teachermode", "e"));