import generateGameSequence from '..';
import randomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Is this number prime?';

const normalizeNumber = num => Math.abs(num);

const isPrime = (number) => {
  const normalizedNumber = normalizeNumber(number);
  if (normalizedNumber === 1) {
    return false;
  }

  const iter = (divisor) => {
    if (divisor === normalizedNumber) {
      return true;
    }
    if (normalizedNumber % divisor !== 0) {
      return iter(divisor + 1);
    }

    return false;
  };

  return iter(2);
};

const gameData = () => {
  const question = randomNumber(-50, 50);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => generateGameSequence(description, gameData);
