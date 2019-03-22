
var settingsButtonRotation = 0;

var restartButton1Rotation = 0;

var restartButton2Rotation = 0;

if(localStorage.getItem("player1Score") == null){
	
	localStorage.setItem("player1Score", "20");
	
}

if(localStorage.getItem("player2Score") == null){
	
	localStorage.setItem("player2Score", "20");
	
}

function refreshScore(){
	
	document.getElementById("player1Score").innerHTML = localStorage.getItem("player1Score");
	
	document.getElementById("player2Score").innerHTML = localStorage.getItem("player2Score");
	
}

window.addEventListener("load", function(){
	
	refreshScore();
	
	$(document).ready(function(){
		
		$("body").fadeIn(500);
		
	});
	
	document.getElementById("settingsButton").addEventListener("click", function(){
		
		$(document).ready(function(){
			
			settingsButtonRotation += 180;
			
			document.getElementById("settingsButton").setAttribute('style','transform:rotate(' + settingsButtonRotation + 'deg)');
			
			if((settingsButtonRotation / 180) % 2 == 1){
				
				document.getElementById("settingsButton").style.marginTop = "-15px";
				
			}
			
			else{
				
				document.getElementById("settingsButton").style.marginTop = "-16px";
				
			}
			
			slideSettings = false;
			
			for(var i = 0; i < document.getElementsByClassName("settingsView").length; i++){
				
				if(document.getElementsByClassName("settingsView")[i].offsetHeight == "60" || document.getElementsByClassName("settingsView")[i].offsetHeight == "0"){
					
					slideSettings = true;
					
				}
				
				
			}
			
			if(slideSettings)$(".settingsView").slideToggle(500);
			
		});
		
	});
	
});

function subtractPlayer2(){
	
	localStorage.setItem("player2Score", parseInt(localStorage.getItem("player2Score")) - 1);
	
	refreshScore();
	
}

function addPlayer2(){
	
	localStorage.setItem("player2Score", parseInt(localStorage.getItem("player2Score")) + 1);
	
	refreshScore();
	
}

function subtractPlayer1(){
	
	localStorage.setItem("player1Score", parseInt(localStorage.getItem("player1Score")) - 1);
	
	refreshScore();
	
}

function addPlayer1(){
	
	localStorage.setItem("player1Score", parseInt(localStorage.getItem("player1Score")) + 1);
	
	refreshScore();
	
}

function restartPlayer1(ele){
	
	restartButton1Rotation -= 360;
	
	ele.setAttribute('style','transform:rotate(' + restartButton1Rotation + 'deg)');
	
	localStorage.setItem("player1Score", "20");
	
	refreshScore();
	
}

function restartPlayer2(ele){
	
	restartButton2Rotation -= 360;
	
	ele.setAttribute('style','transform:rotate(' + restartButton2Rotation + 'deg)');
	
	localStorage.setItem("player2Score", "20");
	
	refreshScore();
	
}

