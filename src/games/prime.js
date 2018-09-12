import engine from '..';
import randomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Is this number prime?';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }

  const iter = (divisor) => {
    if (divisor === number) {
      return true;
    }
    if (number % divisor !== 0) {
      return iter(divisor + 1);
    }

    return false;
  };

  return iter(2);
};

const gameData = () => {
  const question = randomNumber(1, 50);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => engine(description, gameData);
