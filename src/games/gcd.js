import engine from '..';
import randomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommontDivisor = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  if (num1 > num2) {
    const newNum1 = num1 - num2;
    return getGreatestCommontDivisor(newNum1, num2);
  }
  const newNum2 = num2 - num1;
  return getGreatestCommontDivisor(num1, newNum2);
};

const gameData = () => {
  const firstNumber = randomNumber(1, 100);
  const secondNumber = randomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(getGreatestCommontDivisor(firstNumber, secondNumber));
  return cons(question, answer);
};

export default () => engine(description, gameData);
