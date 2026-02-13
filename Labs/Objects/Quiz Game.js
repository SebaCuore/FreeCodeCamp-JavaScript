let questions = [];
let question1 = {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "O2"],
    answer: "H2O"
}

let question2 = {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["Paris", "Rome", "Madrid"],
    answer: "Paris"
}

let question3 = {
    category: "History",
    question: "Who was the first president of the United States?",
    choices: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
    answer: "George Washington"
}

let question4 = {
    category: "Math",
    question: "What is the value of pi (π) rounded to two decimal places?",
    choices: ["3.14", "2.72", "1.62"],
    answer: "3.14"
}   

let question5 = {
    category: "Literature",
    question: "Who wrote 'Romeo and Juliet'?",
    choices: ["William Shakespeare", "Jane Austen", "Mark Twain"],
    answer: "William Shakespeare"
}

questions.push(question1);
questions.push(question2);
questions.push(question3);
questions.push(question4);
questions.push(question5);

const getRandomQuestion = (questions) => {
    let randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

const getRandomComputerChoice = (choices) => {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const getResults = (question, computerChoice) => {
    if (computerChoice === question.answer) {
        return "The computer's choice is correct!";
    } else {
        return "The computer's choice is wrong. The correct answer is: " + question.answer;
    }
}

let randomQuestion = getRandomQuestion(questions);
let computerChoice = getRandomComputerChoice(randomQuestion.choices);
let results = getResults(randomQuestion, computerChoice); 

console.log(randomQuestion, computerChoice, results)