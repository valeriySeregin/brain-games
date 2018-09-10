import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const isEven = num => num % 2 === 0;
const gameRounds = 3;

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const game = (counter) => {
    if (counter === gameRounds) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    let newCounter = counter;
    const question = getRandomNumber(1, 100);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = isEven(question) ? 'yes' : 'no';

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      newCounter += 1;
      game(newCounter);
      return;
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  };

  return game(0);
};
