import engine from '..';
import randomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Balance the given number.';

const sumOfDigits = (str) => {
  const iter = (index, acc) => {
    if (index === str.length) {
      return acc;
    }
    const newAcc = acc + Number(str[index]);
    return iter(index + 1, newAcc);
  };

  return iter(0, 0);
};

const stringOfNumbers = (num, length) => {
  if (length === 0) {
    return '';
  }
  return `${num}${stringOfNumbers(num, length - 1)}`;
};

const getBalancedNumber = (str) => {
  const digitsSum = sumOfDigits(str);

  const baseDigit = Math.floor(digitsSum / str.length);
  const maxDigit = baseDigit + 1;

  const lengthForMax = Math.round(str.length * ((digitsSum / str.length) - baseDigit));
  const lengthForMin = str.length - lengthForMax;

  const firstPart = stringOfNumbers(baseDigit, lengthForMin);
  const secondPart = stringOfNumbers(maxDigit, lengthForMax);

  return `${firstPart}${secondPart}`;
};

const gameData = () => {
  const numberForGame = String(randomNumber(10, 999));
  const question = `${numberForGame}`;
  const answer = getBalancedNumber(numberForGame);
  return cons(question, answer);
};

export default () => engine(description, gameData);
