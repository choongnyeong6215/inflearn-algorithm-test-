function solution(words) {
    let answer = "";

    for(let x of words) {
        if(x === x.toUpperCase()) {
            answer += x.toLowerCase();
        }
        else {
            answer += x.toUpperCase();
        }
    }
    return answer;
}


// test case
console.log(solution("StuDY"));