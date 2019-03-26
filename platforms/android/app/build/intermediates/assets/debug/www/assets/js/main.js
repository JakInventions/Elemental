
var settingsButtonRotation = 0;

var restartButton1Rotation = 0;

var restartButton2Rotation = 0;

document.addEventListener('deviceready', function(){
	
	screen.orientation.lock('portrait');
	
	window.addEventListener("orientationchange", function(){
		
		if(window.matchMedia("(max-width: 600px)").matches){
			
			screen.orientation.lock('portrait');
			
		}
		
	});
	

}, false);

if(localStorage.getItem("player1Score") == null){
	
	localStorage.setItem("player1Score", "20");
	
}

if(localStorage.getItem("player2Score") == null){
	
	localStorage.setItem("player2Score", "20");
	
}

if(localStorage.getItem("player1Color") == null){
	
	localStorage.setItem("player1Color", "blue");
	
}

if(localStorage.getItem("player2Color") == null){
	
	localStorage.setItem("player2Color", "green");
	
}

function refreshScore(){
	
	document.getElementById("player1Score").innerHTML = localStorage.getItem("player1Score");
	
	document.getElementById("player2Score").innerHTML = localStorage.getItem("player2Score");
	
}

window.addEventListener("load", function(){
	
	refreshScore();
	
	setPlayerColor("player1", localStorage.getItem("player1Color"));
	
	setPlayerColor("player2", localStorage.getItem("player2Color"));
	
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

function setPlayerColor(player, color){
	
	if(color == "green") document.getElementById(player + "Box").style.background = "linear-gradient(to bottom right, #63afab, #a3c095)";
	else if(color == "red") document.getElementById(player + "Box").style.background = "linear-gradient(to bottom right, #f9aa8f, #a72618)";
	else if(color == "black") document.getElementById(player + "Box").style.background = "linear-gradient(to right, #414850, #252e37)";
	else if(color == "blue") document.getElementById(player + "Box").style.background = "linear-gradient(to bottom right, #aae0fa, #175377)";
	else if(color == "white") document.getElementById(player + "Box").style.background = "linear-gradient(to bottom right, #fffbd5, #9c835b)";
	
	localStorage.setItem(player + "Color", color);
	
}

