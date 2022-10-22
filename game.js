//Defining Rounds
let rounds = prompt("How Many Rounds Do You Want To Play?");
rounds = parseFloat(rounds);
var userwins = 0;
var computerwin=0;
var ties=0;
//Loop For Amount of Rounds Selected
for (let i=0; i<rounds;i++){
    //Add Prompt Validation In the Future
let choice = prompt('rock, paper, or scissors?');
var computerchoice= Math.floor(Math.random() * 3);

// Convert Number To Choice Rock, Paper, Scissors ETC
if (computerchoice===0){
     computerchoice = 'rock';
}
else if (computerchoice===1) {
    computerchoice='paper';
}
else{
    computerchoice='scissors';
}
// Result Comparing Values

if (computerchoice==choice){
    alert("It's A Tie");
  ties++;
}
else if(computerchoice=='rock' && choice=='paper') {
alert('User Won')
userwins++;
}
else if(computerchoice=='paper' && choice=='scissors') {
    alert('User Won');
    userwins++;
    }
 else if(computerchoice=='scissors' && choice=='rock') {
    alert('User Won');
    userwins++;
    }
    else{
        alert('User Lost');
       computerwin++;
    }
}
alert('You Won '+userwins+' Computer Won '+computerwin+' Tied '+ties);
