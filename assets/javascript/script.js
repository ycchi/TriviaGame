var questionArray = [];




window.onload = function() {

// declare variables
var intervalID;
var timeID;
var timeRunning = false;
var timeLimit = 0;
var nextQuestionRunning = false

var questionTimeLimit = 3 //3 seconds
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
function counter () {
  


  if (timeLimit === 0 && nextQuestionRunning){
    stopIntervalTimer();
    showAnswer();
  } else if (timeLimit === 0 && !nextQuestionRunning){
    stopIntervalTimer();
    nextQuestion();
  }

  timeLimit--;
  // write on page
  $("#questionTimeLimit").text(timeLimit)
  
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
}

// showAnswer
function showAnswer() {
  nextQuestionRunning = false
  timeLimit = 5;
  console.log("showAnswer is Running")
  startIntervalTimer();
}


































// // run "startTrivia" when btnStart is clicked
// $("#btnStart").click(startTrivia);

// function startTrivia() {
//   // intervalKeeper = setInterval(showAnswer, 1000 * 5);
//   // clearTimeout(timeKeeper);
//   // console.log("startTrivia is running");
//   // console.log("intervalKeeper: " + intervalKeeper);

//   if (!clockRunning) {
//     clockRunning = true;
//     timeID = setTimeout(count, 1000);
//   }
// }



// function count() {

//   //  TODO: increment time by 1, remember we cant use "this" here.
//   time++;
//   var countDown15 = 15 - time
//   $("#questionCounter").text(countDown15);
//   console.log("time: " + time)
// }

// if(countDown15 === 0) {
//   //reset 
//   clearInterval(intervalID);
//   clockRunning = false;
//   console.log("countdown ended");
//   showAnswer();
// }



// // showAnswer in between questions
// function showAnswer() {
//   // run startTrivia after 

  


//   timeKeeper = setTimeout(startTrivia, 1000*2);
//   //clearInterval(intervalKeeper);
//   console.log("showAnswer is running")
//   console.log("timeKeeper: " + timeKeeper);
// }





















//document.ready
};