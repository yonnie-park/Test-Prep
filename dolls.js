function solution(board, moves) {
    let answer = 0;
    const basket = [];
  
    moves.forEach((move) => {
      for (let i = 0; i < board.length; i++) {
        const item = board[i][move - 1];
        if (item === 0) continue;
  
        if (item === basket[basket.length - 1]) {
          basket.pop();
          answer += 2;
        } else {
          basket.push(item);
        }
        board[i][move - 1] = 0;
        break;
      }
    });
  
    return answer;
  }