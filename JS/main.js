/*
Alexander Herrera
Project 2
*/

window.addEventListener("DOMContentLoaded", function(){
	
//Getting the elements by id
	function idTag(e){
		var tagId = document.getElementById(e);
		return tagId;
	}

	function getSelectionRadio(){
		var buttonRadio = idTag('collegeForm').turnin;
		for(var i = 0; i < buttonRadio.length; i++){
			if(buttonRadio[i].checked){
				optionValue = buttonRadio[i].value;
			}
		}
	}


function saveInformation(){
		var id                = Math.floor(Math.random()*100000001);
		
		//localStorage.setItem('id', JSON.info);
		alert("Assignment Saved!!");
		
//var getStorage = localStorage.getItem(id, 'info');
//console.log('id', JSON.parse(info));
}
var choose = idTag("majorChoice").document.getElementsByTagName('Architecture');
console.log(choose);

//var getStorage = localStorage.getItem(id, 'info');
var save = idTag('submit');
save.addEventListener("click", saveInformation);


});