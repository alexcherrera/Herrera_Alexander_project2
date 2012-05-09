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
		getSelectionRadio();
		var info              = {};
			info.major        = ["Major Choice", idTag("majorChoice").value];
			info.cName        = ["Course Name", idTag("courseName").value];
			info.cSection     = ["Course Section", idTag('courseSection').value];
			info.topicAndSec  = ["Topic and Section", idTag('topicAndSection').value];
			info.todaysDate   = ["Today's Date", idTag('todaysDate').value];
			info.dueDate      = ["Due Date", idTag('dueDate').value];
			info.option       = ["Turn In Option", optionValue];
			info.note         = ["Note Section", idTag('add').value];
		localStorage.setItem(id, JSON.stringify(info));
		alert("Assignment Saved!!");
		console.log(id);
}
//var getStorage = localStorage.getItem(id, 'info');
//console.log('id', JSON.parse(info));

//var getStorage = localStorage.getItem(id, 'info');
var save = idTag('submit');
save.addEventListener("click", saveInformation);


});