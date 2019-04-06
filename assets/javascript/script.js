var questionArray = [
  {
    question: 'Question 1: Apple or Orange',
    answer: 'Answer 1',
    choices: ['Answer 1', "Answer 2", "Answer 3", "Answer 4"],
    userAnswer: ""
  },
  {
    question: 'Question 2',
    answer: 'Answer 2',
    choices: ['Answer 1', "Answer 2", "Answer 3", "Answer 4"],
    userAnswer: ""
  },
  {
    question: 'Question 3',
    answer: 'Answer 3',
    choices: ['Answer 1', "Answer 2", "Answer 3", "Answer 4"],
    userAnswer: ""
  },
  {
    question: 'Question 4',
    answer: 'Answer 4',
    choices: ['Answer 1', "Answer 2", "Answer 3", "Answer 4"],
    userAnswer: ""
  }
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

// counter function??
function counter() {
  
  if (timeLimit === 0 && nextQuestionRunning){
    stopIntervalTimer();
    showAnswer();
  } else if (timeLimit === 0 && !nextQuestionRunning){
    stopIntervalTimer();
    nextQuestion();
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
  $("#question").text(questionArray[0].question)
  //console.log(questionArray[0].question)

  // write multiple choices on page
  // loop through questionArray[i].choices array and write each choice to list item element
  for (var i = 0; i < questionArray[0].choices.length; i++){
    //Create and append each li to ul #choices 
    var $choices = $("#choices")
    var $li = $("<li>");
    $li
      .text(questionArray[0].choices[i])    
      .addClass("list-group-item list-group-item-action");
    $choices.append($li);
    console.log("li " + $li )
  };


    //FAILD ATTEMPT: 
    //Method2: adding text to existing li element
    /*
    $("li").each(function(){
      console.log("this: " + $(this))
      $(this).text(questionArray[0].choices[i])
      console.log(i);
    });
    */
  
}

// showAnswer
function showAnswer() {
  nextQuestionRunning = false
  timeLimit = 5;
  console.log("showAnswer is Running")
  startIntervalTimer();

  // write correct answer to page
  $("#question").text("Correct Answer is...")
  // highlight correct answer to page

}






















































//document.ready
};