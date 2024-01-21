function solution(words) {
    answer = "";
    let wordCenter = Math.floor(words.length / 2);

    if(words.length % 2 !== 0) {
        answer += words.substr(wordCenter, 1);
    }
    else {
        answer += words.substr(wordCenter-1, 2);
    }
    return answer;
}


// test case
console.log(solution("study"));
console.log(solution("good"));