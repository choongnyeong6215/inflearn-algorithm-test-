function solution(words) {
    let answer = "";
    let repeatCnt = 1;

    for(let i = 0; i < words.length; i++) {
        if(words[i] === words[i+1]) {
            repeatCnt++;
        }
        else {
            answer += words[i];

            if(repeatCnt >= 2) {
                answer += String(repeatCnt);
            }

            // 카운트 초기화
            repeatCnt = 1;
        }
    }
    return answer;
}


// test case
console.log(solution("KKHSSSSSSSE"));