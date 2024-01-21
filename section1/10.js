function solution(words, txt) {
    let cnt = 0;

    for(let x of words) {
        if(x === txt) {
            cnt++;
        }
    }
    return cnt;
}


// test case
console.log(solution("COMPUTERPROGRAMMING", "R"));
console.log(solution("GGRRRR", "G"));