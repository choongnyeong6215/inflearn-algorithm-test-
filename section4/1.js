function soluttion(arr) {
  let std = Number.MIN_SAFE_INTEGER;
  let maxNum = 0;

  for (let num of arr) {
    const sum = num
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);

    if (sum > std) {
      std = sum;
      maxNum = num;
    }

    if (sum === std) {
      maxNum = num > maxNum ? num : maxNum;
    }
  }

  return maxNum;
}

// test case
console.log(soluttion([128, 460, 603, 40, 521, 137, 123]));
