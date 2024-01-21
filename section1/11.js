function solution(words) {
    let cnt = 0;

    for(let x of words) {
        if(/[A-Z]/.test(x)) {
            cnt++;
        }
    }
    return cnt;
}

// test case
console.log(solution("KoreaTimeGood!!!"));
console.log(solution("hELLLLo123"));