function solution(per1, per2) {
    let arrLen = per1.length;
    let score = [];

    for(let i = 0; i < arrLen; i++) {
        if(per1[i] === per2[i]) {
            score.push("D");
        }
        else if ((per1[i] === 1 && per2[i] === 3) || (per1[i] === 2 && per2[i] === 1) || (per1[i] === 3 && per2[i] === 2)) {
            score.push("A");
        }
        else {
            score.push("B");
        }
    }
    return score;
}


// test case
console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));