$( document ).ready(function() {

  //Data Structure for quiz questions, answers, and correct answers.
  var questions = [
  //Question 1
  {
    question: 'What is the science of fermenting beer called?',

    answers: [
    'Zygotica',
    'Zymurgy',
    'Saccormycecea',
    'Sacromyetica'
    ],

    correct: 1,

  },
  //Question 2
  {
    question: 'What process determines the composition of Wort?',

    answers: [
    'Brocking',
    'Germinating',
    'Heating',
    'Mashing'
    ],

    correct: 3,

  },
  //Question 3
  {
    question: 'What is the oldest active brewery in the world?',

    answers: [
    'Heineken',
    'Hefeweizen',
    'Amstel',
    'Weihenstephan'
    ],

    correct: 3,

  },
  //Question 4
  {
    question: 'What is the sweet, amber extract that is filtered from malt called?',

    answers: [
    'Wort',
    'Drought',
    'Germ',
    'Hops'
    ],

    correct: 0,

  },
  //Question 5
  {
    question: 'What is the unfermentable sugars left that act as the body of the beer called?',

    answers: [
    'Hops',
    'Pilsner',
    'Dextrin',
    'Bock'
    ],

    correct: 2,
  },
  ];

var currentQuestion = 0;


function newQuiz() {
  //Sets current question to index 0.
  currentQuestion = 0;
  //Sets first question
  $('#question').empty().append(questions[currentQuestion].question);

  //Appends #answers0-3 with answers from the current question.
  for (var i = 0, length = questions[i].answers.length - 1; i <= length; i++) {
    $('#answer' + i).empty().append(questions[currentQuestion].answers[i]);
    console.log(i);
  }

}



function progressQuiz() {
  if (currentQuestion != 5) {

  currentQuestion++;

  $('#question').empty().append(questions[currentQuestion].question);

  for (var i = 0, length = questions[i].answers.length - 1; i <= length; i++) {
    $('#answer' + i).empty().append(questions[currentQuestion].answers[i]);
    console.log(i);
  }

  } else {

    //End of Quiz.
  }

}

newQuiz();


});
