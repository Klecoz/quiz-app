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
  var right = 0;
  var wrong = 0;

//Creates new quiz.
function newQuiz() {
  //Sets current question to index 0.
  currentQuestion = 0;
  right = 0;
  wrong = 0;
  //Sets first question
  $('#question').empty().append(questions[currentQuestion].question);
  //Sets counter back to default.
  $('#counter').empty().append((currentQuestion+1) + ' of 5');
    //Sets background back to default.
    $('#main').css({'background-image':'url(css/beerimg/beer0.jpg)'});
  //Appends #answers0-3 with answers from the current question.
  for (var i = 0, length = questions[i].answers.length - 1; i <= length; i++) {
    $('#answer' + i).empty().append(questions[currentQuestion].answers[i]);
    console.log(i);
  }

}


//Progresses Quiz.
function progressQuiz() {
  //Prevents quiz from progressing if there are no more questions.
  if (currentQuestion != 4) { //Could also say questions.length I guess.
  //Sets current question to next index.
  currentQuestion++;
  //Clears question and sets next question
  $('#question').empty().append(questions[currentQuestion].question);
  //Clears answers and sets next answer.
  for (var i = 0, length = questions[i].answers.length - 1; i <= length; i++) {
    $('#answer' + i).empty().append(questions[currentQuestion].answers[i]);
    console.log(i);
  }

  //Changes background of #main when question progresses.
  $('#main').css({'background-image':'url(css/beerimg/beer' + (currentQuestion+ 1) +'.jpg)'});

    //Updates the counter with the current question.
    $('#counter').empty().append((currentQuestion+1) + ' of 5');

  } else {
    //Lets user know that they have completed the quiz, and starts a new quiz.
    alert('You did it! You completed the quiz! You got ' + right +' right and '+ wrong + ' wrong');
    newQuiz();

  }

}

//Creates new quiz at page load.
newQuiz();

//When an answer is clicked...
$('.answers div').click(function() {
  //If the answer is correct...
  if ($(this).text() == questions[currentQuestion].correct) {
    //show correct answer prompt.
    right++;
    $('#correct').show();
  }
  //If the answer is wrong...
  else if ($(this).text() != questions[currentQuestion].correct){
    //Change the correct answer within the #wrong.
    wrong++;
    $('#realanswer').empty().append('Sorry! The answer is ' + questions[currentQuestion].correct);
    //Show the wrong answer prompt.
    $('#wrong').show();
  }

});

//When .next element is clicked...
$('.next').click(function() {
  //Call progressQuiz function to load new question/answers.
  progressQuiz();
  //Hide Correct/Wrong prompts.
  $('#correct').hide();
  $('#wrong').hide();

});

});
