import readlineSync from 'readline-sync';
import isNumberEven from './games/even';
import calculator from './games/calc';
import findGreatestCommonDivisor from './games/gcd';
import balanceNumber from './games/balance';
import arithProgression from './games/progression';
import isNumberPrime from './games/prime';

const chooseTheGame = (game) => {
  switch (game) {
    case 1:
      isNumberEven();
      break;
    case 2:
      calculator();
      break;
    case 3:
      findGreatestCommonDivisor();
      break;
    case 4:
      balanceNumber();
      break;
    case 5:
      arithProgression();
      break;
    case 6:
      isNumberPrime();
      break;
    default:
      console.log('I don\'t know what that means!');
  }
};

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log(
    `The list of the Games:
  
    1 - isNumberEven;
    2 - calculator;
    3 - findGreatestCommonDivisor;
    4 - balanceNumber;
    5 - arithProgression;
    6 - isNumberPrime.\n`,
  );

  const requestFromUser = Number(readlineSync.question('Choose the game you want to play: '));
  chooseTheGame(requestFromUser);
};
