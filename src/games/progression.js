import generateGameSequence from '..';
import randomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'What number is missing in this progression?';
const rowLength = 10;

const generateNthMemberOfArithProgression = (num, step) => num + step;

const getRowOfNumbers = (num, step, exclude) => {
  const iter = (counter, acc) => {
    const newNumber = generateNthMemberOfArithProgression(acc, step);
    if (counter < rowLength) {
      if (counter === exclude) {
        return `.. ${iter(counter + 1, newNumber)}`;
      }
      return `${acc} ${iter(counter + 1, newNumber)}`;
    }

    return '';
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

export default () => generateGameSequence(description, gameData);
