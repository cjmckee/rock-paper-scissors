$(document).ready(function() {

var wins = 0;
var ties = 0;
var losses = 0;
var userchoice;
var computerchoice;
var result;

var play = function () {
var pick = $('input[name=user]:checked').val();
    pick = parseInt(pick);
	
console.log(pick);
	
var comp = (Math.random() * 3 + 1).toFixed(0);

console.log(comp);

var winner = 0;

if (pick == 1)
{ userchoice = "Rock";
	 if (comp == 2)
		{ winner = 0;
		computerchoice = "Paper"; }
	else if (comp == 3)
		{ winner = 2;
		computerchoice = "Scissors"; }
	else
		{ winner = 1;
			computerchoice = "Rock"; } }
else if (pick == 2)
	{ userchoice = "Paper";
	if (comp == 1)
		{ winner = 2;
		computerchoice = "Rock"; }
	else if (comp == 2)
		{ winner = 1;
		computerchoice = "Paper"; }
	else
		{ winner = 0; 
		computerchoice = "Scissors"; } }
else
	{ userchoice = "Scissors";
	if (comp == 1)
		{ winner = 0;
		computerchoice = "Rock"; }
	else if (comp == 2)
		{ winner = 2;
		computerchoice = "Paper"; }
	else
		{ winner = 1; 
		computerchoice = "Scissors"; } }

console.log(userchoice + " " + computerchoice);
console.log(winner);

if (winner == 2)
	{ wins ++;
	result = "You win!"; }
else if (winner == 1)
	{ ties++;
	result = "You tied!"; }
else
	{ losses++;
	result = "You lose!"; }
	
$('#humanpick').text(userchoice);
$('#comppick').text(computerchoice);
$('#final').text(result);
$('#wins').text(wins);
$('#ties').text(ties);
$('#losses').text(losses);
}

$("#go").click(function() {
    play();});

});
