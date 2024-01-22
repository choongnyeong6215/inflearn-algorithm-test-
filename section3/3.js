function solution(words) {
    let answer = "";

    for(let txt of words) {
        if(/[0-9]/.test(txt)) {
            answer += txt;
        }
    }
    return parseInt(answer);
}


// test case
console.log(solution("g0en2T0s8eSoft"));
console.log(solution("a1b2c3d4e5"));