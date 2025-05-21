let questions = [

    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Nikola Tesla",
        "answer_2": "Atze Schröder",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Bill Gates",
        "right_answer": 3,
        "category": "html"
    },
    {
        "question": "Wie viele Bundesländer hat Deutschland?",
        "answer_1": "10",
        "answer_2": "12",
        "answer_3": "14",
        "answer_4": "16",
        "right_answer": 4,
        "category": "geo"
    },
    {
        "question": "Was bedeutet mittig in CSS?",
        "answer_1": "right",
        "answer_2": "center",
        "answer_3": "left",
        "answer_4": "margin",
        "right_answer": 2,
        "category": "css"
    },
    {
        "question": "Wie viele Kontinente gibt es auf der Erde?",
        "answer_1": "5",
        "answer_2": "6",
        "answer_3": "7",
        "answer_4": "8",
        "right_answer": 3,
        "category": "geo"
    },
    {
        "question": "Was benötige ich bei document.getElementById?",
        "answer_1": "innerHTML",
        "answer_2": "document",
        "answer_3": "ID",
        "answer_4": "function",
        "right_answer": 3,
        "category": "js"
    },
    {
        "question": "Wie setze ich in CSS eine Schriftfarbe?",
        "answer_1": "color: red;",
        "answer_2": "font-color: red;",
        "answer_3": "text-color: red;",
        "answer_4": "text-style: red;",
        "right_answer": 1,
        "category": "css"
    },
    {
        "question": "Bei welcher Sportart braucht man 11 Spieler?",
        "answer_1": "Schwimmen",
        "answer_2": "Squash",
        "answer_3": "Fussball",
        "answer_4": "Baseball",
        "right_answer": 3,
        "category": "sport"
    },
    {
        "question": "Seit wann gibt es HTML?",
        "answer_1": "1990",
        "answer_2": "1995",
        "answer_3": "2000",
        "answer_4": "2005",
        "right_answer": 1,
        "category": "html"
    },
    {
        "question": "Wie viele Punkte macht ein Touchdown im American Football?",
        "answer_1": "2",
        "answer_2": "3",
        "answer_3": "6",
        "answer_4": "7",
        "right_answer": 3,
        "category": "sport"
    },
    {
        "question": "Wie viele Software-Sprachen gibt es?",
        "answer_1": "100",
        "answer_2": "200",
        "answer_3": "300",
        "answer_4": "400",
        "right_answer": 4,
        "category": "js"
    }

];

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {

    
    if (currentQuestion >= questions.length) {
    document.getElementById('endScreen').style = '';
    document.getElementById('question-body').style = 'display: none';
    document.getElementById('correct-answers').innerText = rightAnswers;
    document.getElementById('total-questions').innerText = questions.length;
    
    } else {

    let percent = Math.round((rightAnswers / questions.length) * 100);
    document.getElementById('progress-bar').style.width = percent + '%';
    document.getElementById('progress-bar').innerText = percent + '%';


    let question = questions[currentQuestion];

    highlightCategory(question.category);

    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightAnswers++; // Zähler erhöhen
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');        
    }
    document.getElementById('next-button').disabled = false;

    // Progressbar nach jeder Antwort aktualisieren!
    let percent = Math.round((rightAnswers / questions.length) * 100);
    document.getElementById('progress-bar').style.width = percent + '%';
    document.getElementById('progress-bar').innerText = percent + '%';
}

function nextQuestion(){
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons()
    showQuestion();
}
    
function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}

let rightAnswers = 0;

function highlightCategory(category) {
    const categories = ['html', 'css', 'js', 'sport', 'geo'];
    categories.forEach(cat => {
        const nav = document.getElementById('nav-' + cat);
        if (nav) {
            nav.classList.toggle('active-category', cat === category);
        }
    });
}

function startQuiz() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('question-body').style.display = '';
    document.getElementById('endScreen').style.display = 'none';
    init();
}

function restart() {
    currentQuestion = 0;
    rightAnswers = 0;
    document.getElementById('endScreen').style.display = 'none';
    document.getElementById('question-body').style.display = '';
    resetAnswerButtons();
    showQuestion();
}

