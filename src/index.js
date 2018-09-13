import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export default (description, gameData) => {
  console.log();
  console.log(description);
  console.log();
  const gameRounds = Number(readlineSync.question('How many rounds would you like to play? '));

  if (gameRounds > 10) {
    console.log('That\'s too much! Recommended no more than 10.');
    return;
  }
  if (gameRounds === '' || gameRounds === 0) {
    console.log('Maybe next time...');
    return;
  }

  console.log();
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const game = (counter) => {
    if (counter === gameRounds) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const questionAndAnswer = gameData();
    console.log(`Question: ${car(questionAndAnswer)}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === cdr(questionAndAnswer)) {
      console.log('Correct!');
      game(counter + 1);
      return;
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${cdr(questionAndAnswer)}'.`);
    console.log(`Let's try again, ${name}!`);
  };

  game(0);
};
