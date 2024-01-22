function solution(words) {
    words = words.toLowerCase();
    const revWords = words.split("").reverse().join("");

    if(words === revWords) {
        return "YES";
    }
    else {
        return "NO";
    }
}


// test case
console.log(solution("gooG"));
console.log(solution("halo"));