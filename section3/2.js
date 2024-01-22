function solution(words) {
    words = words.toLowerCase().replace(/[^a-z]/g, "");
    const revWords = words.split("").reverse().join("");

    if(words === revWords) {
        return "YES";
    }
    else {
        return "NO";
    }
}


// test case
console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));