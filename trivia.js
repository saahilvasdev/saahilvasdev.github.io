var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0; //set all the variables to 0

var questions = [ //created an array with all the questions that I'm asking in my quiz
  {
      question: "How many championships has Michael Jordan won?",
      a: "4",
      b: "5",
      c: "6",
      d: "9",
      answer: "C"
    },
  {
      question: "What were two numbers that Kobe Bryant wore in the NBA?",
      a: "8 & 23",
      b: "10 & 24",
      c: "8 & 33",
      d: "8 & 24",
      answer: "D"
    },
  {
      question: "Which college did LeBron James attend?",
      a: "Duke",
      b: "Kentucky",
      c: "Kansas",
      d: "Did not attend college",
      answer: "D"
    },
  {
      question: "What draft pick was Anthony Davis?",
      a: "1",
      b: "2",
      c: "3",
      d: "8",
      answer: "A"
    },
  {
      question: "Which team has Kevin Durant NOT play on?",
      a: "Thunder",
      b: "Hawks",
      c: "Nets",
      d: "Warriors",
      answer: "B"
    },
  {
      question: "Who is the all-time scoring leader?",
      a: "Kobe Bryant",
      b: "Kareem Abdul-Jabbar",
      c: "Karl Malone",
      d: "Michael Jordan",
      answer: "B"
    },
  {
      question: "How many players are on the court during a game?",
      a: "8",
      b: "10",
      c: "12",
      d: "14",
      answer: "B"
    },
  {
      question: "Who has the most championships with 17?",
      a: "Los Angeles Lakers",
      b: "Golden State Warriors",
      c: "San Antonio Spurs",
      d: "Boston Celtics",
      answer: "D"
    },
  {
      question: "Who has the nickname of 'The Mailman'",
      a: "Kevin Durant",
      b: "Dennis Rodman",
      c: "Karl Malone",
      d: "Wilt Chamberlin",
      answer: "C"
    },
  {
      question: "How many teams are in the NBA?",
      a: "30",
      b: "28",
      c: "26",
      d: "20",
      answer: "A"
    }
  ];
// this get function is short for the getElementById function  
function get(x){
  return document.getElementById(x);
}

//this function is responsible for loading the questions and showing how many questions the user got correct
function loadQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h4>You got "+correct+" of "+questions.length+" questions correct!</h4>";
    get("test_status").innerHTML = "Test completed";
    // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    return false;
  }
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length; //get function to display the number question the user is on
  
  //sets the ch variable to the 3 indices in the array
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  chD = questions[pos].d;
  // display the question
  test.innerHTML = "<h6>"+question+"</h6>";
  // display the answer options
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='D'> "+chD+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

//this function checks if the user selected the right answer
function checkAnswer(){
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){ //traverses through the choice array
    if(choices[i].checked){ //using a control structure
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if(choice == questions[pos].answer){
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  pos++;
  // then the loadQuestion function runs again to go to next question
  loadQuestion();
}
// Add event listener to call renderQuestion on page load event
window.addEventListener("load", loadQuestion);