function solution(words) {
    let answer = ""

    answer = words.replaceAll("A", "#")

    return answer;
}


// test case
console.log(solution("BANANA"));
console.log(solution("AAA:)AAA"))