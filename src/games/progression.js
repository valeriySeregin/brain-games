import engine from '..';
import randomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'What number is missing in this progression?';
const rowLength = 10;

const getRowOfNumbers = (num, step, exclude) => {
  const iter = (counter, acc) => {
    if (counter === rowLength - 1) {
      return `${acc}`;
    }
    const newNumber = acc + step;
    if (counter === exclude) {
      return `.. ${iter(counter + 1, newNumber)}`;
    }

    return `${acc} ${iter(counter + 1, newNumber)}`;
  };

  return iter(0, num);
};

const gameData = () => {
  const progressionStep = randomNumber(1, 10);
  const firstNumber = randomNumber(1, 100);
  const excludedPosition = randomNumber(0, 9);

  const question = getRowOfNumbers(firstNumber, progressionStep, excludedPosition);
  const answer = String(firstNumber + excludedPosition * progressionStep);

  return cons(question, answer);
};

export default () => engine(description, gameData);
