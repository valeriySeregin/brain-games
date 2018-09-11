import engine from '..';
import randomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const isEven = num => num % 2 === 0;
const description = 'Answer "yes" if number even otherwise answer "no".';

const gameData = () => {
  const question = randomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => engine(description, gameData);
