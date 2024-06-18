import inquirer from 'inquirer';
import { IAnswers } from './interface/answers.interface';

const questions = [
  {
    type: 'list',
    name: 'tech',
    message: 'Qual o Boirplate eu devo criar?',
    choices: ['NodeJS + TypeScript', 'Scss'],
  },
  {
    type: 'input',
    name: 'techName',
    message: 'Qual o nome do novo projeto?',
  },
];

class Init {
  constructor() {
    inquirer.prompt(questions).then((anwers: IAnswers) => {
      console.log(anwers);
    });
  }
}

new Init();
