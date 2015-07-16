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

    correct: 'Zymurgy',

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

    correct: 'Mashing',

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

    correct: 'Weihenstephan',

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

    correct: 'Wort',

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

    correct: 'Dextrin',
  },
  ];

var currentQuestion = 0;

//Creates new quiz.
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


//Progresses Quiz.
function progressQuiz() {
  //Prevents quiz from progressing if there are no more questions.
  if (currentQuestion != 5) { //Could also say questions.length I guess.
  //Sets current question to next index.
  currentQuestion++;
  //Clears question and sets next question
  $('#question').empty().append(questions[currentQuestion].question);
  //Clears answers and sets next answer.
  for (var i = 0, length = questions[i].answers.length - 1; i <= length; i++) {
    $('#answer' + i).empty().append(questions[currentQuestion].answers[i]);
    console.log(i);
  }

  } else {

    //End of Quiz.
  }

}

//Creates new quiz at page load.
newQuiz();

//When an answer is clicked...
$('.answers div').click(function() {
  //If the answer is correct...
  if ($(this).text() == questions[currentQuestion].correct) {
    alert('yay!');
    //show correct answer prompt.
    $('#correct').show();
  }
  //If the answer is wrong...
  else if ($(this).text() != questions[currentQuestion].correct){
    alert('nope!');
    //Change the correct answer within the #wrong.
    $('#realanswer').empty().append('Sorry! The answer is ' + questions[currentQuestion].correct);
    //Show the wrong answer prompt.
    $('#wrong').show();
  }

});


});
