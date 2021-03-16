const readlineSync = require('readline-sync');
const chalk = require('chalk');

var score=0;
const userName= readlineSync.question("What's your name?");
console.log(chalk.blue("Welcome "+ userName));
console.log(chalk.blue("Let's play a small game how well you know me!! \nLet's start " +userName));
function game(question,answer){
    userAnswer = readlineSync.question(question);
    if(userAnswer==answer){
        console.log(chalk.green("right"));
        score= score+1;
        console.log("score " + score +"\n------------------");
    }else{
        console.log(chalk.red("oops wrong"));
        console.log("score " + score +"\n ------------------");
    }
}

questions=[{
    question:"Where do I live?",
    answer:"patiala"
},
{
    question:"In which company I work?",
    answer:"cashkaro"
},
{
    question:"How old I am?",
    answer: "22"
},
{
    question: "What is my pet name?",
    answer:"kallu"
}
]

questions.forEach(element => {
    game(element.question,element.answer);
});

console.log("Total Score " + chalk.blue(score));