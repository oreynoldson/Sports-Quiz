$(document).ready(function(){

	//Trigger the Instructions overlay
	$(".instructions").click(function(){
		$(".overlay").fadeIn(800);
	});

	//Hide instructions overlay
	$(".exit").click(function(){
		$(".overlay").fadeOut(1000);
		$(".answerReveal, .quizOverlay").fadeOut(400);
	});

	//Display the question
	$(".box").click(function(){
		$(".quizOverlay").fadeIn(800);
		lookForAvailableQuestion();
	});

	//Display the answer
	$(".ans").click(function(){
		$(".answerReveal").fadeIn(200);
	});

	//clear the child nodes from the document
	$("#exitexitQuestion").click(function(){
		nextQuestion();
	})

	
	/*Displays random question*/
	function lookForAvailableQuestion(){

		//Selects random number to choose question
		var i = Math.floor(Math.random() * quiz.length);

		/*Add Questions to the page*/
		var question = document.getElementById("question");
		var questionTxt = document.createTextNode(quiz[i].question);
		question.appendChild(questionTxt);

		/*Add Answer options to the page*/
		var option1 = document.getElementById("ansA");
		var option1Txt = document.createTextNode(quiz[i].choice1);
		option1.appendChild(option1Txt);

		var option2 = document.getElementById("ansB");
		var option2Txt = document.createTextNode(quiz[i].choice2);
		option2.appendChild(option2Txt);

		var option3 = document.getElementById("ansC");
		var option3Txt = document.createTextNode(quiz[i].choice3);
		option3.appendChild(option3Txt);

		var option4 = document.getElementById("ansD");
		var option4Txt = document.createTextNode(quiz[i].choice4);
		option4.appendChild(option4Txt);

		/*Add The Answer*/
		var correctAns = document.getElementById("actualAnswer");
		var correctAnsTxt = document.createTextNode(quiz[i].answer);
		correctAns.appendChild(correctAnsTxt);

		/*Add the answer description*/
		var answerDesc = document.getElementById("ansDescription");
		var ansDescTxt = document.createTextNode(quiz[i].ansDescription);
		answerDesc.appendChild(ansDescTxt);

		/*Take question object out of quiz array so can't be used again*/
		quiz.splice(i, 1);

	};//end of look for available question function

	function nextQuestion(){
		if(questionTxt.parentNode){
			questionTxt.parentNode.removeChild(questionTxt);
		}
	}

});//End of document ready function

/************************************************************
	QUIZ OBJECTS
************************************************************/

/* OBJECT CONSTRUCTOR*/
function question(question, choice1, choice2, choice3, choice4, answer, ansDescription, chosen){
	this.question = question;
	this.choice1 = choice1;
	this.choice2 = choice2;
	this.choice3 = choice3;
	this.choice4 = choice4;
	this.answer = answer;
	this.ansDescription = ansDescription;
	this.chosen = true;
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


