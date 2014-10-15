$(document).ready(function(){

/************************************************************
	JQUERY DOM INTERACTION
************************************************************/

	//Trigger the Instructions overlay
	$(".instructions").click(function(){
		$("#overlay").fadeIn(800);
	});

	//Hide instructions overlay
	$(".exit").click(function(){
		$("#overlay").fadeOut(1000);
		$(".answerReveal, .quizOverlay").fadeOut(400);
	});


	//use reload function to reload page in browser over redoing the 
	//logic of the game to allow for the page to be cleared of 
	//exisitng data
	$(".newGame").click(function(){
		location.reload(true);
	});

	$("#newGameButton").click(function(){
		location.reload(true);
	});

/***********************************
	DISPLAY QUESTION
************************************/

	//Display the question
	//When the box is clicked call show the question
	//if it has the class unanswered and call the function 
	//to dislay the questions

	$(".quizGrid").on("click", ".unAnswered", function(){
		//shows the question
		$(".quizOverlay").fadeIn(800);
		//inputs data from objects to show questions, choices etc..
		lookForAvailableQuestion();
		//toggles the class from answered to answered
		$(this).toggleClass("unAnswered answered")
		//gets box id -- need to make it a global variable
		console.log($(this).attr("id"));
		var boxId = $(this).attr("id");
		globalBoxId = "#" + boxId;
	});



/***********************************
	DISPLAY ANSWER
************************************/

	//Display the answer
		//Clicking on the choice calls the check answer function
		//And displays the answer section
		//possibly change to jQurey
		document.getElementById("ansA").onclick = checkAnswer;
		document.getElementById("ansB").onclick = checkAnswer;
		document.getElementById("ansC").onclick = checkAnswer;
		document.getElementById("ansD").onclick = checkAnswer;


/***********************************
	CLEARS CONTAINERS OF PREVIOUS QUESTION
************************************/

	//clear the child nodes from the document
	$("#exitQuestion").click(function(){
		/*Makes sure the spaces for questions and answers are cleared*/
		document.getElementById("question").innerHTML = " ";
		//makes sure class dosent carry over to next section
		$("#rightWrong").removeClass();
		// nextQuestion();
		console.log(quiz.length);
		//once there are no more questions in the quiz array end game
		if(quiz.length == 0){
			globalScoreLength = globalScoreArray.length;
			$("#endScore").text(globalScoreLength);
			//displays end of game overlay
			$("#endgameOverlay").show();
		}
	});

/***********************************
	ARRAY FOR KEEPING SCORE
************************************/
	
	var scoreArray = [];
	globalScoreArray = scoreArray;

	var scoreLength = scoreArray.length;
	globalScoreLength = scoreLength;

	
});//End of document ready function


/************************************************************
	FUNCTIONS
************************************************************/

/***********************************
	ADDS VALUES FROM OBJECTS TO HTML
************************************/

/*Displays random question*/
	function lookForAvailableQuestion(){

		//Selects random number to choose question
		var i = Math.floor(Math.random() * quiz.length);

		/*Add Questions to the page*/
		document.getElementById("question").display="block";
		document.getElementById("question").innerHTML = quiz[i].question;
		/*Add Option 1 to the page*/
		document.getElementById("ansA").display="block";
		document.getElementById("ansA").innerHTML = quiz[i].choice1;

		/*Add Option 2 to the page*/
		document.getElementById("ansB").display="block";
		document.getElementById("ansB").innerHTML = quiz[i].choice2;
		/*Add Option 3 to the page*/
		document.getElementById("ansC").display="block";
		document.getElementById("ansC").innerHTML = quiz[i].choice3;
		/*Add Option 4 to the page*/
		document.getElementById("ansD").display="block";
		document.getElementById("ansD").innerHTML = quiz[i].choice4;

		/*Add The Answer*/
		document.getElementById("actualAnswer").display="block";
		document.getElementById("actualAnswer").innerHTML = quiz[i].answer;

		/*Put the answer for the variable in a global variable*/
		//Use the global variable to check against the choice selected
		var getAns = document.getElementById("actualAnswer").innerHTML = quiz[i].answer;
		// console.log(getAns);
		globalAnsVar = getAns;

		/*Add the answer description*/
		document.getElementById("ansDescription").display="block";
		document.getElementById("ansDescription").innerHTML = quiz[i].ansDescription;


		/*Take question object out of quiz array so can't be used again*/
		quiz.splice(i, 1);

	};//end of look for available question function

/***********************************
	CHECKS ANSWER / FADES IN ANSWER
	SECTION / CHANGE BOX STYLE 
	DEPENDING ON ANSWER
************************************/

	/*Moves ontoCheck Answer is correct*/
	function checkAnswer(){
		/*Check to see if this is improper useage*/
		$(".answerReveal").fadeIn(200);
		//stores the user choice for question
		var choice = this.innerHTML;
		//store rightWrong id in variable
		var rightWrongId = document.getElementById("rightWrong");
		//Check choice against answer for the question
		//If correct
		if(choice == globalAnsVar){
			
			//Adds green correct when display answer
			rightWrongId.display="block";
			/*Adds class green to make correct green color*/
			rightWrongId.className += " green";
			//Iserts correct into HTML on results page
			rightWrongId.innerHTML = "Correct";
			//Adds green background to the box on correct answer
			$(globalBoxId).addClass("green-background");
			//Removes the nested p with the class number to remove the number 
			$(globalBoxId).children(".number").remove();
			//Adds a icon font to the remaining p below which add tick to box
			$(globalBoxId).children("p").addClass("icon-checkmark");
			//Push number to array to update score on correct answer
			globalScoreArray.push(1);
			globalScoreLength = globalScoreArray.length;
			$("#scoreSpan").text(globalScoreLength);

		} else {

			//Adds red incorrect when display answer
			rightWrongId.display="block";
			/*Adds class red to make incorrect red color*/
			rightWrongId.className += " red";
			//Inserts incorrect into HTML on results page
			rightWrongId.innerHTML = "Incorrect";
			//Adds red background to the box selected if incorrect
			$(globalBoxId).addClass("red-background");
			//Removes the nested p with the class number to remove the number 
			$(globalBoxId).children(".number").remove();
			//Adds a icon font to the remaining p below which add cross to box
			$(globalBoxId).children("p").addClass("icon-close");
		}//end if else statement
	}//end check answer

/************************************************************
	QUIZ OBJECTS
************************************************************/

/* OBJECT CONSTRUCTOR*/
//this.question = pquestion;
function question(question, choice1, choice2, choice3, choice4, answer, ansDescription){
	this.question = question;
	this.choice1 = choice1;
	this.choice2 = choice2;
	this.choice3 = choice3;
	this.choice4 = choice4;
	this.answer = answer;
	this.ansDescription = ansDescription;
	// this.score = score;
};//end of object constructor

/*CREATE AN ARRAY FOR NEW QUESTION OBJECTS*/
var quiz = [{
	//question 1 index = 0
	question: "Track and field star Carl Lewis won how many gold medals at the 1984 Olympic games?",
	choice1: 2,
	choice2: 3,
	choice3: 4,
	choice4: 8,
	answer: 4,
	ansDescription: "Lewis won nine Olympic gold medals in all: four in 1984 (100m, 200m, 4x100m, long jump), two in 1988 (100m and long jump), two in 1992 (4x100m and long jump), and one in 1996 (long jump)." 
	//score: -1;
}, {
	//question 2 index = 1
	question: "In the NFL, who holds the record for the most yards gained in a single season?",
	choice1: "Barry Sanders",
	choice2: "Adrian Peterson",
	choice3: "Erick Dickerson",
	choice4: "Jamal Lewis",
	answer: "Erick Dickerson",
	ansDescription: "Dickerson played in the NFL for 10 years and rushed for a career total of 13,000 yards with his single season record being 2,105 yards which he set in 1984 playing for the Los Angeles Rams."
}, {
	//question 3 index = 2
	question: "Which former NBA player once scored 13 points in the last 35 seconds to win the game?",
	choice1: "Tracy McGrady",
	choice2: "Michael Jordan",
	choice3: "Yao Ming",
	choice4: "Patrick Ewing",
	answer: "Tracy McGrady",
	ansDescription: "On December 9, 2004, McGrady scored 13 points in the last 35 seconds during a game against the San Antonio Spurs: four consecutive 3 pointers, including a steal and the game-winning 3 pointer with 1.7 seconds left that led to the 81-80 Rockets win."
}, {
	//question 4 index = 3
	question: "Which country won the 2004 UEFA European Championships ?",
	choice1: "Portugal",
	choice2: "Greece",
	choice3: "Germany",
	choice4: "Spain",
	answer: "Greece",
	ansDescription: "On their way to winning the tournament they beat France, Czech Republic and Portugal  the hosts that year  who they beat by a score of 1 – 0 in the final."
}, {
	//question 5 index = 4
	question: "Who was the first golfer since Jack Nicklaus to win eight PGA events his first six years on tour?",
	choice1: "Phil Mickelson",
	choice2: "Tiger Woods",
	choice3: "Germany",
	choice4: "Greg Norman",
	answer: "Phil Mickelson",
	ansDescription: "Mickelson has won 42 events on the PGA Tour, including five major championships: three Masters titles (2004, 2006, 2010), a PGA Championship (2005), and an Open Championship (2013)."
}, {
	//question 6 index = 5
	question: "In European rugby Leinster won a second straight Heineken Cup. What other club has one back-to-back European titles?",
	choice1: "Tulon",
	choice2: "Leicester",
	choice3: "Leinster",
	choice4: "Stade Francais",
	answer: "Leicester",
	ansDescription: " Leicester are also the only English side to have qualified to play in every Heineken Cup in which English teams have participated, and are also the most successful English side in Europe; back-to-back champions in 2001 and 2002."
}, {
	//question 7 index = 6
	question: "In NCAA football, which player holds the record for the most passing yards in a college career?",
	choice1: "Tim Tebow",
	choice2: "Colt Brennan",
	choice3: "Philip Rivers",
	choice4: "Case Keenum",
	answer: "Case Keenum",
	ansDescription: "Keenum played college football for the University of Houston becoming the NCAA's all-time leader in total passing yards, touchdowns, and completions."
}, {
	//question 8 index = 7
	question: "Who was the oldest player to be on a premier league winning team?",
	choice1: "Ryan Giggs",
	choice2: "Tony Adams",
	choice3: "Edwin Van Der Sar",
	choice4: "Peter Schmeichel",
	answer: "Edwin Van Der Sar",
	ansDescription: "In addition, he is also one of the few footballers to have won the UEFA Champions League with two different teams – with Ajax in 1995 and Manchester United in 2008."
}, {
	//question 9 index = 8
	question: "Who was the highest earning athlete in 2014?",
	choice1: "Tiger Woods",
	choice2: "Lebron James",
	choice3: "Lewis Hamilton",
	choice4: "Floyd Mayweather",
	answer: "Floyd Mayweather",
	ansDescription: "Mayweather is the first athlete besides Tiger Woods to earn $100 million in Forbes' annual tally of the highest-paid athletes." 
}
];//end of array for question objects


