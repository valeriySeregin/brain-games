import generateGameSequence from '..';
import randomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'What is the result of the expression?';

const gameData = () => {
  const firstOperand = randomNumber(1, 20);
  const secondOperand = randomNumber(1, 20);
  const operatorNumber = randomNumber(1, 3);

  let result;
  let operator;

  switch (operatorNumber) {
    case 1:
      operator = '+';
      result = firstOperand + secondOperand;
      break;
    case 2:
      operator = '-';
      result = firstOperand - secondOperand;
      break;
    case 3:
      operator = '*';
      result = firstOperand * secondOperand;
      break;
    default:
      break;
  }

  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = String(result);
  return cons(question, answer);
};

export default () => generateGameSequence(description, gameData);
