import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const gameRounds = 3;

export default (description, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const game = (counter) => {
    if (counter === gameRounds) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    let newCounter = counter;
    const getQuestionAndAnswer = gameData();
    console.log(`Question: ${car(getQuestionAndAnswer)}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === cdr(getQuestionAndAnswer)) {
      console.log('Correct!');
      newCounter += 1;
      game(newCounter);
      return;
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${cdr(getQuestionAndAnswer)}'.`);
    console.log(`Let's try again, ${name}!`);
  };

  return game(0);
};
