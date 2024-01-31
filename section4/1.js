function soluttion(arr) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    let stdNum = 0; // 자릿수 합계 원본 값

    for(let num of arr) {
        // 자릿수 합계
        let sum = num.toString().split("").reduce((accr, curv) => accr + Number(curv), 0);

        if(sum > maxNum) {
            maxNum = sum;
            stdNum = num;
        }
        else if(sum === maxNum) {
            if(num > stdNum) {
                return num;
            }
            else {
                return stdNum;
            }
        }
    }
}


// test case
console.log(soluttion([128, 460, 603, 40, 521, 137, 123]));