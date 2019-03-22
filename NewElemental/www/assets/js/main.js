
window.addEventListener("load", function(){
	
	var settingsButtonRotation = 0;
	
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

