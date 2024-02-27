function solution(board, moves) {
  const stack = [];
  let disappearDollCnt = 0;

  moves.map((crain) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][crain - 1] !== 0) {
        // 현재 뽑은 인형
        const currentDoll = board[i][crain - 1];

        // 인형 뽑은 위치 빈 공간으로 변경
        board[i][crain - 1] = 0;

        // 바구니에 같은 인형 있는 경우 -> 2개 모두 제거
        if (stack[stack.length - 1] === currentDoll) {
          stack.pop();
          disappearDollCnt += 2;
        } else {
          stack.push(currentDoll);
        }
        break;
      }
    }
  });

  return disappearDollCnt;
}

// test case
let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(board, moves));
