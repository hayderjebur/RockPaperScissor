let p = document.querySelector("#p");
let r =document.querySelector("#r");
let s =document.getElementById("s");
let userScore_span=document.querySelector("#user-score");
let compScore_span=document.getElementById("comp-score");
let para = document.getElementById('para');

let user_score=0;
let comp_score=0;

function win(userchoice,computerChoice){
	user_score++;
	userScore_span.innerHTML=user_score+":";
	para.innerHTML=converTwoWord(userchoice) + " beats "+converTwoWord(computerChoice)+" You Win ";

}

function converTwoWord(letter){
	if (letter==="r"){return "Rock"}
	if (letter==="p"){return "Paper"}
		else {return "Scissor"}


}

function lost(userchoice,computerChoice){
	comp_score++;
	compScore_span.innerHTML=comp_score;
	para.innerHTML=converTwoWord(computerChoice) + " beats " + converTwoWord(userchoice)+"Computer win "
}

function draw(){
	para.innerHTML="Nice Shot But Try Again"

}


function getComputerChoice(){

	const choices=['r', 'p', 's'];
	const randomNumber=Math.floor(Math.random()*3);

	return choices[randomNumber];
	}

function game(userchoice){

const computerChoice=getComputerChoice();

	switch(userchoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
		win(userchoice,computerChoice);
		break;


		case "rp":
		case "ps":
		case "sr":
		lost()
		break;

		case "rr":
		case "pp":
		case "ss":
		draw()

	}

	}


r.addEventListener("click",function(){
	game('r');
});

p.addEventListener("click",function(){
game('p');
});



s.addEventListener("click",function(){
game('s')
});

