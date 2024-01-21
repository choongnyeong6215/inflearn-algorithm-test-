function solution(words) {
    let answer = "";

    for(let i = 0; i < words.length; i++) {
        // console.log(words[i], words.indexOf(words[i]), i);

        if(words.indexOf(words[i]) === i) {
            answer += words[i];
        }
    }
    return answer;
}


// test case
console.log(solution("ksetkkset"));
console.log(solution("hheelLoo!!@@##"));