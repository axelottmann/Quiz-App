let questions = [

    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Pierce Brosnan",
        "answer_2": "Atze Schröder",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Timberlake",
        "right_answer": 3
    },
    {
        "question": "Was ist die Hauptstadt von Deutschland?",
        "answer_1": "Berlin",
        "answer_2": "Hamburg",
        "answer_3": "München",
        "answer_4": "Frankfurt",
        "right_answer": 1
    },
    {
        "question": "Wie viele Bundesländer hat Deutschland?",
        "answer_1": "10",
        "answer_2": "12",
        "answer_3": "16",
        "answer_4": "14",
        "right_answer": 3
    },
    {
        "question": "Was ist die Hauptstadt von Frankreich?",
        "answer_1": "Paris",
        "answer_2": "Berlin",
        "answer_3": "Madrid",
        "answer_4": "Rom",
        "right_answer": 1
    },
    {
        "question": "Wie viele Kontinente gibt es auf der Erde?",
        "answer_1": "5",
        "answer_2": "6",
        "answer_3": "7",
        "answer_4": "8",
        "right_answer": 3
    },
];

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('next').disabled = true;

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection){
    let question = questions[currentQuestion];
    console.log('selected answer is', selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber is', selectedQuestionNumber);
    console.log('Current question is', question['right_answer']);

    if (selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');        
    }
}

function startQuiz() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('quiz-container').style.display = '';
    init();
}
