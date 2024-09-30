// creating an array and passing the number, questions, options, and answers
let questions = [
    {
      numb: 1,
      question: " A car accelerates uniformly from rest to 100 km/h in 8 seconds. What is the car's acceleration?",
      answer: "2.78 m/s²",
      options: [
        "2.78 m/s²",
        "3.47 m/s²",
        "5.28 m/s²",
        "8.75 m/s²"
      ]
    },
    {
      numb: 2,
      question: "A block of mass 5 kg is pushed with a force of 50 N on a rough surface with a coefficient of friction 0.2. What is the block's acceleration?",
      answer: "4 m/s²",
      options: [
        "4 m/s²",
        "6 m/s²",
        "7 m/s²",
        "8 m/s²"
      ]
    },
    {
      numb: 3,
      question: "An object of mass 10 kg is attached to a spring with a spring constant of 200 N/m. If the object is displaced by 0.5 meters, what is the potential energy stored in the spring??",
      answer: "50 J",
      options: [
        "10 J",
        "25 J",
        "50 J",
        "100 J"
      ]
    },
    {
      numb: 4,
      question: "A capacitor with capacitance 10 µF is connected to a 12 V battery. How much energy is stored in the capacitor? ",
      answer: "0.72 J",
      options: [
        "0.24 J",
        "0.36 J",
        "0.72 J",
        "1.44 J"
      ]
    },
    {
      numb: 5,
      question: "A projectile is launched with an initial velocity of 50 m/s at an angle of 30° to the horizontal. What is the range of the projectile? (Ignore air resistance, g=9.8 m/s^2)",
      answer: "255 m",
      options: [
        "127 m",
        "219 m",
        "255 m",
        "319 m"
      ]
    },
    {
      numb: 6,
      question: "A heat engine operates between two reservoirs at temperatures of 500 K and 300 K. What is the maximum theoretical efficiency of the engine?",
      answer: "40%",
      options: ["20% ", "30%", "40%", "50%"]
    },
    {
      numb: 7,
      question: "A Carnot engine operates between two heat reservoirs at 800 K and 300 K. If the engine extracts 1000 J of heat from the hot reservoir, how much work does it perform?",
      answer: " 625 J",
      options: [" 375 J", " 500 J", " 625 J", " 750 J"]
    },
    {
      numb: 8,
      question: "A bullet of mass 20 g is fired horizontally at a velocity of 400 m/s into a wooden block of mass 5 kg, which is initially at rest. After the collision, the bullet becomes embedded in the block. What is the final velocity of the block with the embedded bullet?",
      answer: "1.45 m/s",
      options: ["1.45 m/s", "2.50 m/s", "3.20 m/s", "4.00 m/s"]
    },
    {
      numb: 9,
      question: "A conducting rod of length 0.5 m moves at a velocity of 8 m/s perpendicular to a uniform magnetic field of 0.2 T. What is the induced emf in the rod?",
      answer: "0.8 V",
      options: [
        "0.4 V",
        "0.8 V",
        "1.2 V",
        "1.6 V"
      ]
    },
    {
      numb: 10,
      question: "A 500 g object is attached to a string and whirled in a horizontal circle of radius 2 m at a speed of 10 m/s. What is the tension in the string?",
      answer: "100 N",
      options: ["25 N", "50 N", "75 N", "100 N"]
    }
    
  ];
  //selecting all required elements
  const start_btn = document.querySelector(".start_btn button");
  const info_box = document.querySelector(".info_box");
  const exit_btn = info_box.querySelector(".buttons .quit");
  const continue_btn = info_box.querySelector(".buttons .restart");
  const quiz_box = document.querySelector(".quiz_box");
  const result_box = document.querySelector(".result_box");
  const option_list = document.querySelector(".option_list");
  const time_line = document.querySelector("header .time_line");
  const timeText = document.querySelector(".timer .time_left_txt");
  const timeCount = document.querySelector(".timer .timer_sec");
  
  // if startQuiz button clicked
  start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); //show info box
  };
  
  // if exitQuiz button clicked
  exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
  };
  
  // if continueQuiz button clicked
  continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
  };
  
  let timeValue = 15;
  let que_count = 0;
  let que_numb = 1;
  let userScore = 0;
  let counter;
  let counterLine;
  let widthValue = 0;
  
  const restart_quiz = result_box.querySelector(".buttons .restart");
  const quit_quiz = result_box.querySelector(".buttons .quit");
  
  // if restartQuiz button clicked
  restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
  };
  
  // if quitQuiz button clicked
  quit_quiz.onclick = () => {
    window.location.reload(); //reload the current window
  };
  
  const next_btn = document.querySelector("footer .next_btn");
  const bottom_ques_counter = document.querySelector("footer .total_que");
  
  // if Next Que button clicked
  next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
      //if question count is less than total question length
      que_count++; //increment the que_count value
      que_numb++; //increment the que_numb value
      showQuetions(que_count); //calling showQestions function
      queCounter(que_numb); //passing que_numb value to queCounter
      clearInterval(counter); //clear counter
      clearInterval(counterLine); //clear counterLine
      startTimer(timeValue); //calling startTimer function
      startTimerLine(widthValue); //calling startTimerLine function
      timeText.textContent = "Time Left"; //change the timeText to Time Left
      next_btn.classList.remove("show"); //hide the next button
    } else {
      clearInterval(counter); //clear counter
      clearInterval(counterLine); //clear counterLine
      showResult(); //calling showResult function
    }
  };
  
  // getting questions and options from array
  function showQuetions(index) {
    const que_text = document.querySelector(".que_text");
  
    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag =
      "<span>" +
      questions[index].numb +
      ". " +
      questions[index].question +
      "</span>";
    let option_tag =
      '<div class="option"><span>' +
      questions[index].options[0] +
      "</span></div>" +
      '<div class="option"><span>' +
      questions[index].options[1] +
      "</span></div>" +
      '<div class="option"><span>' +
      questions[index].options[2] +
      "</span></div>" +
      '<div class="option"><span>' +
      questions[index].options[3] +
      "</span></div>";
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
  
    const option = option_list.querySelectorAll(".option");
  
    // set onclick attribute to all available options
    for (i = 0; i < option.length; i++) {
      option[i].setAttribute("onclick", "optionSelected(this)");
    }
  }
  // creating the new div tags which for icons
  let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
  let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
  
  //if user clicked on option
  function optionSelected(answer) {
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
  
    if (userAns == correcAns) {
      //if user selected option is equal to array's correct answer
      userScore += 1; //upgrading score value with 1
      answer.classList.add("correct"); //adding green color to correct selected option
      answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
      console.log("Correct Answer");
      console.log("Your correct answers = " + userScore);
    } else {
      answer.classList.add("incorrect"); //adding red color to correct selected option
      answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
      console.log("Wrong Answer");
  
      for (i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correcAns) {
          //if there is an option which is matched to an array answer
          option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
          option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
          console.log("Auto selected correct answer.");
        }
      }
    }
    for (i = 0; i < allOptions; i++) {
      option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
  }
  
  function showResult() {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3) {
      // if user scored more than 3
      //creating a new span tag and passing the user score number and total question number
      let scoreTag =
        "<p>and congrats! , You got " + userScore +" out of " + questions.length + "</p>";
      scoreText.innerHTML = scoreTag; //adding new span tag inside score_Text
    } else if (userScore > 1) {
      // if user scored more than 1
      let scoreTag =
        "<p>and nice , You got " +
        userScore +
        " out of " +
        questions.length +
        "</p>";
      scoreText.innerHTML = scoreTag;
    } else {
      // if user scored less than 1
      let scoreTag =
        "<p>and sorry , You got only " +
        userScore +
        " out of " +
        questions.length +
        "</p>";
      scoreText.innerHTML = scoreTag;
    }
  }
  
  function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
      timeCount.textContent = time; //changing the value of timeCount with time value
      time--; //decrement the time value
      if (time < 9) {
        //if timer is less than 9
        let addZero = timeCount.textContent;
        timeCount.textContent = "0" + addZero; //add a 0 before time value
      }
      if (time < 0) {
        //if timer is less than 0
        clearInterval(counter); //clear counter
        timeText.textContent = "Time Off"; //change the time text to time off
        const allOptions = option_list.children.length; //getting all option items
        let correcAns = questions[que_count].answer; //getting correct answer from array
        for (i = 0; i < allOptions; i++) {
          if (option_list.children[i].textContent == correcAns) {
            //if there is an option which is matched to an array answer
            option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
            option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
            console.log("Time Off: Auto selected correct answer.");
          }
        }
        for (i = 0; i < allOptions; i++) {
          option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
        }
        next_btn.classList.add("show"); //show the next button if user selected any option
      }
    }
  }
  
  function startTimerLine(time) {
    counterLine = setInterval(timer, 29);
    function timer() {
      time += 1; //upgrading time value with 1
      time_line.style.width = time + "px"; //increasing width of time_line with px by time value
      if (time > 549) {
        //if time value is greater than 549
        clearInterval(counterLine); //clear counterLine
      }
    }
  }
  
  function queCounter(index) {
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag =
      "<p> " + index + " of " + questions.length + " Questions</p>";
    bottom_ques_counter.innerHTML = totalQueCounTag; //adding new span tag inside bottom_ques_counter
  }
  