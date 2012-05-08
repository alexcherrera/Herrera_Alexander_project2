/*
Alexander Herrera
Project 2
*/

window.addEventListener("DOMContentLoaded", function(){

//Getting the elements by id
	function idTag(e){
		return document.querySelector('#'+e);
	}

	function getSelectionRadio() {
		var buttonRadio = document.getElement(0).turnin;
		for(var i = 0; i < buttonRadio.length; i++){
			if(buttonRadio[i].checked){
				optionValue = buttonRadio[i].value;
			}
		}
	}
var store = idTag('submit');
store.addEventListener("click", storeInformation);

	function storeInformation(){
		var id                = Math.floor(Math.random()*100000001);
		getSelectionRadio();
		var info              = {};
			info.major        = ["Major Choice", idTag('majorChoice').value];
			info.cName        = ["Course Name", idTag('courseName').value];
			info.cSection     = ["Course Section", idTag('courseSection').value];
			info.topicAndSec  = ["Topic and Section", idTag('topicAndSection').value];
			info.todaysDate   = ["Today's Date", idTag('todaysDate').value];
			info.dueDate      = ["Due Date", idTag('dueDate').value];
			info.option       = ["Turn In Option", optionValue];
			info.note         = ["Note Section", idTag('add').value];
		localStorage.setItem(id, JSON.stringify(info));
		alert("Assignment Saved!!");
	}




});