let questions = [{
        'question': 'Wie viele "große Ringe" gab es ursprünglich?',
        'answer_1': '1',
        'answer_2': '7',
        'answer_3': '20',
        'answer_4': '18',
        'category': 'general',
        'right_answer': 3
    },
    {
        'question': 'In welchem Land wurde "Der Herr der Ringe" gedreht?',
        'answer_1': 'Australien',
        'answer_2': 'Neuseeland',
        'answer_3': 'Neufundland',
        'answer_4': 'Russland',
        'category': 'production',
        'right_answer': 2
    },
    {
        'question': 'Wie heißt die Frau von Tom Bombadil?',
        'answer_1': 'Silberblatt',
        'answer_2': 'Morgenstern',
        'answer_3': 'Goldbeere',
        'answer_4': 'Abendstern',
        'category': 'general',
        'right_answer': 3
    },
    {
        'question': 'Wie heißt das elbische Wort für "Freund"?',
        'answer_1': 'Murloc',
        'answer_2': 'Mellon',
        'answer_3': 'Fergon',
        'answer_4': 'Nelron',
        'category': 'general',
        'right_answer': 2
    },
    {
        'question': 'Wo war Gondor als die Westfold fiel?',
        'answer_1': 'Rohan',
        'answer_2': 'Mordor',
        'answer_3': 'Isengard',
        'answer_4': 'Gondor',
        'category': 'general',
        'right_answer': 4
    },
    {
        'question': 'Wie heißt Gollum auch noch?',
        'answer_1': 'Smeagol',
        'answer_2': 'Smigel',
        'answer_3': 'Deagol',
        'answer_4': 'Sandigmann',
        'category': 'general',
        'right_answer': 1
    },
    {
        'question': 'Wie heißt der Turm in dem Saruman lebt?',
        'answer_1': 'Isengart',
        'answer_2': 'Orthanc',
        'answer_3': 'Barad Dûr',
        'answer_4': 'Argonath',
        'category': 'general',
        'right_answer': 2
    },
    {
        'question': 'Wer schrieb "Der Herr der Ringe"?',
        'answer_1': 'Robert Asprin',
        'answer_2': 'Steven Hawking',
        'answer_3': 'Peter Jackson',
        'answer_4': 'J.R.R. Tolkien',
        'category': 'production',
        'right_answer': 4
    },
    {
        'question': 'Wie viel spielte der erste Kinofilm "Die Gefährten" 2001 weltweit ein?',
        'answer_1': 'ca. 857 Mio. $',
        'answer_2': 'ca. 871 Mio. $',
        'answer_3': 'ca. 911 Mio. $',
        'answer_4': 'ca. 1,11 Mrd. $',
        'category': 'production',
        'right_answer': 2
    },
    {
        'question': 'Wer sollte ursprünglich die Rolle der Galadriel übernehmen?',
        'answer_1': 'Sandra Bulloc',
        'answer_2': 'Jodie Foster',
        'answer_3': 'Michelle Pfeiffer',
        'answer_4': 'Lucy Lawless',
        'category': 'production',
        'right_answer': 4
    },
    {
        'question': 'Wer hat keinen Elbenring?',
        'answer_1': 'Elrond',
        'answer_2': 'Celeborn',
        'answer_3': 'Gandalf',
        'answer_4': 'Galadriel',
        'category': 'general',
        'right_answer': 2
    },
    {
        'question': 'Wie viel spielte der zweite Kinofilm "Die zwei Türme" 2002 weltweit ein?',
        'answer_1': 'ca. 777 Mio. $',
        'answer_2': 'ca. 811 Mio. $',
        'answer_3': 'ca. 926 Mio. $',
        'answer_4': 'ca. 1,09 Mrd. $',
        'category': 'production',
        'right_answer': 3
    },
    {
        'question': 'Welches war kein Elbenring?',
        'answer_1': 'Vilya',
        'answer_2': 'Nenya',
        'answer_3': 'Nomya',
        'answer_4': 'Narya',
        'category': 'general',
        'right_answer': 3
    },
    {
        'question': 'Wie viel spielte der dritte Kinofilm "Die Rückkehr des Königs" 2003 weltweit ein?',
        'answer_1': 'ca. 757 Mio. $',
        'answer_2': 'ca. 943 Mio. $',
        'answer_3': 'ca. 1,01 Mrd. $',
        'answer_4': 'ca. 1,19 Mrd. $',
        'category': 'production',
        'right_answer': 4
    },
    {
        'question': 'Wie nennt Aragorn seinen Sohn?',
        'answer_1': 'Elessar',
        'answer_2': 'Arathorn',
        'answer_3': 'Elladan',
        'answer_4': 'Eldarion',
        'category': 'general',
        'right_answer': 4
    },
    {
        'question': 'Welchen Titel wollte Tolkien nachträglich lieber für "Die Rückkehr des Königs" verwenden?',
        'answer_1': 'Das Ende Saurons',
        'answer_2': 'Der Ringkrieg',
        'answer_3': 'Die Vernichtung des Ringes',
        'answer_4': 'Der Beginn des neuen Zeitalters',
        'category': 'production',
        'right_answer': 2
    }
];

let currentQuestion = 0;
let rightQuestions = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');




function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

////////////////////////////shows question or last page of quiz/////////////////////////
function showQuestion() {

    if (gameIsOver()) {
        showEndScreen();
    } else { //show Question//
        updateProgressBar();
        updateToNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function showEndScreen() {
    document.getElementById('end-screen').style = "";
    document.getElementById('question-body').style = "display:none";
    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
}

function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`
    document.getElementById('progress-bar').style = `width: ${percent}%;`;
}

function updateToNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    selectCategory();
}

////////////////////////////select the categories for question//////////////////////////
function selectCategory() {
    let question = questions[currentQuestion];
    document.getElementById('category-2').innerHTML = '';
    document.getElementById('category-1').innerHTML = '';

    if (question['category'] == 'general') {
        document.getElementById('category-1').innerHTML = `<img src="img/arrowRed.png">`
    } else {
        document.getElementById('category-2').innerHTML = `<img src="img/arrowRed.png">`
    }
}

////////////////////////////function for animated answer///////////////////////////////
function answer(selection) {
    let question = questions[currentQuestion];
    let selectedAnswer = selection.slice(-1);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (rightAnswerSelected(selectedAnswer, question)) { //Richtige Frage beantwortet//
        document.getElementById(selection).parentNode.classList.add('bg-green');
        AUDIO_SUCCESS.play();
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-red');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-green');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(selectedAnswer, question) {
    return selectedAnswer == question['right_answer'];
}

////////////////////////////shows the next question//////////////////////////////////
function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons()
    showQuestion();
}

////////////////////////////resets the background of answerbuttons///////////////////
function resetAnswerButtons() {
    document.getElementById('next-button').disabled = true;
    document.getElementById('answer_1').parentNode.classList.remove('bg-green');
    document.getElementById('answer_1').parentNode.classList.remove('bg-red');
    document.getElementById('answer_2').parentNode.classList.remove('bg-green');
    document.getElementById('answer_2').parentNode.classList.remove('bg-red');
    document.getElementById('answer_3').parentNode.classList.remove('bg-green');
    document.getElementById('answer_3').parentNode.classList.remove('bg-red');
    document.getElementById('answer_4').parentNode.classList.remove('bg-green');
    document.getElementById('answer_4').parentNode.classList.remove('bg-red');
}


////////////////////////////restart game////////////////////////////////////////////
function restartGame() {
    document.getElementById('end-screen').style = 'display:none'; //end-screen wieder ausblenden//
    document.getElementById('question-body').style = ''; //question--body wieder einblenden//
    currentQuestion = 0;
    rightQuestions = 0;
    init();
}