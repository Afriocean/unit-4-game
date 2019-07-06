
var winCounter = 0;
var lossCounter = 0;
var targetNumber = Math.floor(Math.random() * 101) + 19;
$("#randomNumber").text(targetNumber);



var Crys1 = Math.floor(Math.random() * 11) + 1;
var Crys2 = Math.floor(Math.random() * 11) + 1;
var Crys3 = Math.floor(Math.random() * 11) + 1;
var Crys4 = Math.floor(Math.random() * 11) + 1;


$("#numberWins").html(winCounter);
$("#numberLosses").html(lossCounter);

var counter = 0;
$("#finalTotal").text(counter);

function restartGame() {

targetNumber = Math.floor(Math.random() * 101) + 19;
$("#targetNumber").text(targetNumber);
Crys1 = Math.floor(Math.random() * 11) + 1;
Crys2 = Math.floor(Math.random() * 11) + 1;
Crys3 = Math.floor(Math.random() * 11) + 1;
Crys4 = Math.floor(Math.random() * 11) + 1;
counter = 0;
$("#finalTotal").text(counter);

}

function win() {

	alert("You win!");
	winCounter ++;
	$("#numberWins").text(winCounter);
	restartGame();
}

function lose() {

	alert("You lose!");
	lossCounter ++;
	$("#numberLosses").text(lossCounter);
	restartGame();
}

$('#one').on ('click', function(){
    counter = counter + Crys1;
    console.log ("crys1")
    $('#finalTotal').text(counter); 
          
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  

$('#two').on ('click', function(){
    counter = counter + Crys2;
    
    $('#finalTotal').text(counter); 
         
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  

$('#three').on ('click', function(){
    counter = counter + Crys3;
    
    $('#finalTotal').text(counter); 
          
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  

$('#four').on ('click', function(){
    counter = counter + Crys4;
    
    $('#finalTotal').text(counter); 
         
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  
