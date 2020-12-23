import { utils } from "./jestExampleUtil";
// Go ahead and write these functions out yourself
// to get some practice with Typescript.  We'll be using
// them to run basic tests on.  Please add two more basic
// functions that you then create tests for.

// This should return a correct sum
export const sum = (a: number, b: number): number => {
  return a + b;
};

export const subtraction = (a: number, b: number): number => {
  return a - b;
};

export const addTheseTwoStrings = (a: string, b: string): string => {
  return a + b;
};

// The below function is a much more in depth example of a Jest test
// Don't try to make one like this yet, but read through it and try to
// understand what's going on.
export const thumbWar = (player1, player2) => {
  const numberToWin = 2;
  let player1Wins = 0;
  let player2Wins = 0;
  while (player1Wins < numberToWin && player2Wins < numberToWin) {
    const winner = utils.getWinner(player1, player2);
    if (winner === player1) {
      player1Wins++;
    } else if (winner === player2) {
      player2Wins++;
    }
  }
  return player1Wins > player2Wins ? player1 : player2;
};
