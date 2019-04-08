var questionArray = [
  {
    question: 'Pick a fruit',
    answer: 'Apple',
    choices: ['Tomato', "Potato", "Apple", "Onion"],
    userAnswer: ""
  },
  {
    question: 'Pick a vegetable',
    answer: 'Carrot',
    choices: ['Carrot', "Watermelon", "Sunflower", "Potato"],
    userAnswer: ""
  },
  {
    question: '7 - 3 = ?',
    answer: '4',
    choices: ['4', "3", '2', "8"],
    userAnswer: ""
  },
  {
    question: '1 + 1 = ?',
    answer: '2',
    choices: ['1', "2", "3", "4"],
    userAnswer: ""
  },
  // {
  //   question: '',
  //   answer: '',
  //   choices: [],
  //   userAnswer: ""
  // },

]



// randomize question orders
// for (var i = 0; i < questionArray.length; i ++){
//   var randomIndexArray = [];
//   randomIndexArray.push(Math.floor(Math.random() * questionArray.length)); 
// }
// console.log(randomIndexArray);

window.onload = function() {

// declare variables
var intervalID;
var timeID;
var timeRunning = false;
var timeLimit = 0;
var nextQuestionRunning = false

var questionCounter = 0;

var correctCounter = 0;




// start when button is clicked
$("#btnStart").click(startIntervalTimer);

// start interval timer
function startIntervalTimer() {
  intervalID = setInterval(counter, 1000);
  timeRunning = true;
  console.log("Interval Started")
  
}

// counter function
function counter() {
  
  if (timeLimit === 0 && nextQuestionRunning){
    stopIntervalTimer();
    showAnswer();
  } else if (timeLimit === 0 && !nextQuestionRunning){
    stopIntervalTimer();
    nextQuestion();
  } else if (questionArray.length === questionCounter){
    stopIntervalTimer();
    showResult();
  }

  timeLimit--;
  // write on page
  $("#timeRemaining").text(timeLimit)
  
}




// stop interval timer -> only to trigger when question is answered (correct/incorrect) and time runs out.
function stopIntervalTimer() {
  clearInterval(intervalID);
  timeRunning = false;
  console.log("Interval Stopped")
}


// nextQuestion
function nextQuestion() {
  nextQuestionRunning = true;
  timeLimit = 20;
  console.log("nextQuestion is Running")
  startIntervalTimer();

  // write question on page
  // loop through question
  $("#question").text(questionArray[questionCounter].question)
  //console.log(questionArray[0].question)

  // empty #choices
  $("#choices").empty();

  // write multiple choices on page
  // loop through questionArray[i].choices array and write each choice to list item element
  for (var i = 0; i < questionArray[questionCounter].choices.length; i++){
    //Create and append each li to ul #choices 
    var $choices = $("#choices")
    var $li = $("<li>");
    $li
      .text(questionArray[questionCounter].choices[i])
      .attr("data", questionArray[questionCounter].choices[i])    
      .addClass("list-group-item list-group-item-action");
    $choices.append($li);
  };

  // click event on choices li -> check to see if the choice is an answer

  var answer = questionArray[questionCounter].answer
  console.log(answer)
  $("li").on("click", function(){
    if ($(this).attr("data") === answer){
      alert("You Got It!");
      correctCounter++;
      stopIntervalTimer();
      nextQuestion();

      questionCounter++;

    } else {
      stopIntervalTimer();
      showAnswer();

      questionCounter++;

    }
  })

  // increment questionCounter each time this function is called.
  
  console.log("questionCounter: " + questionCounter);

  // write score to page
  $("#correctCounter").text(correctCounter);
};






// showAnswer
function showAnswer() {
  nextQuestionRunning = false
  timeLimit = 5;
  console.log("showAnswer is Running")
  startIntervalTimer();

  // write correct answer to page
  $("#question").text("Correct Answer is...")

  // highlight correct answer to page: NOT WORKING
  //$("li[data*='questionArray[questionCounter].answer']").addClass("active");

  // empty #choices
  $("#choices").empty();

  var $choices = $("#choices")
    var $li = $("<li>");
    $li
      .text(questionArray[questionCounter].answer)    
      .addClass("list-group-item list-group-item-action active");
    $choices.append($li);



}


function showResult() {
  $("#question").text("Your final score is: " + correctCounter);

  // empty #choices
  $("#choices").empty();

  // reset questionCounter
  questionCounter = 0;
}





















































//document.ready
};