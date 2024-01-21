function solution(arr) {
    let minLen = Number.MIN_SAFE_INTEGER;
    let longWord = "";

    for(let words of arr) {
        if(words.length > minLen) {
            longWord = words;
            minLen = words.length;
        }
    }
    return longWord;
}


// test case
console.log(solution(["teacher", "time", "student", "beautiful", "good"]));