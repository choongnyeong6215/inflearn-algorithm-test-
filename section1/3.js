function solution(n) {
    let answer = 0;
    const das = 12;
    
    answer = Math.ceil(n / das);

    return answer;
}


// test case
console.log(solution(25));
console.log(solution(178));