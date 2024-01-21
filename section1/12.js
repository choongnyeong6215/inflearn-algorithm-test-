function solution(words) {
    let answer = "";

    for(let x of words) {
        answer += x.toUpperCase();
    }
    return answer;
}


// test case
console.log(solution("ItisTimeToStudy"));