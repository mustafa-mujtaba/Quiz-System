#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold('\n\t Welcome to Muhammad Mehdi Raza Quiz \n\t'));
const quiz = await inquirer.prompt([{
        name: "question_1",
        type: "list",
        message: "What is TypeScript primarily used for?",
        choices: ["Server-side scripting", "Client-side scripting", " Machine learning", "Data analysis"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Which of the following best describes TypeScript?",
        choices: [" A superset of JavaScript", "A subset of JavaScript", "A completely different programming language", " An extension of Python"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Which keyword is used to declare a variable in TypeScript?",
        choices: ["var", "const", "let", "All of above"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Which tool is commonly used to compile TypeScript code to JavaScript?",
        choices: ["TSC (TypeScript Compiler)", "Babel", "Node.js", "Webpack"]
    },
    {
        name: "question_5",
        type: "list",
        message: "TypeScript supports which of the following features that JavaScript lacks?",
        choices: ["Static typing", "Dynamic typing", "Strongly typed variables", "Weakly typed variables"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "Client-side scripting":
        console.log(chalk.green.bold("1. Correct"));
        ++score;
        break;
    default:
        console.log(chalk.red.bold("1. Incorrect"));
}
switch (quiz.question_2) {
    case " A superset of JavaScript":
        console.log(chalk.green.bold("2. Correct"));
        ++score;
        break;
    default:
        console.log(chalk.red.bold("2. Incorrect"));
}
switch (quiz.question_3) {
    case "All of above":
        console.log(chalk.green.bold("3. Correct"));
        ++score;
        break;
    default:
        console.log(chalk.red.bold("3. Incorrect"));
}
switch (quiz.question_4) {
    case "TSC (TypeScript Compiler)":
        console.log(chalk.green.bold("4. Correct"));
        ++score;
        break;
    default:
        console.log(chalk.green.bold("4. Incorrect"));
}
switch (quiz.question_5) {
    case "Static typing":
        console.log(chalk.green.bold("5. Correct"));
        ++score;
        break;
    default:
        console.log(chalk.green.bold("5. Incorrect"));
}
console.log(chalk.green.bold(`\n\t Score :${score}\n\t`));
