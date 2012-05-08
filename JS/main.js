/*
Alexander Herrera
Project 2
*/

window.addEventListener("DOMContentLoaded", function(){

//Getting the elements by id
	function idTag(e){
		var elementId = document.getElementById(e);
		return elementId;
}

/*
//Getting the element by tag name
	function tagName (t){
		var tagName = document.getElementsByTagName(t);
		return tagName;
	}
*/

/*
	function theValues (){
		var formTag = tagName('form');
		var selectIdInfo = idTag('majorChoice');
		var createValue = setAttribute('value');
		createValue.setAttribute()

	}
*/

	function getSelectionRadio() {
		var buttonRadio = document.forms(0).turnin;
		for (var i = 0; i < buttonRadio.length; i++){
			if (buttonRadio[i].checked){
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

var optionValue;
/*
		var chooseMajorId = getId("MajorByDepartmentSchools");
		var choiceOfArchTag = getTagName("Architecture");
		var choiceOfBioTag = getTagName("Biology");
		var choiceOfMathTag = getTagName("Mathematics");
		var choiceOfAccTag = getTagName("Accounting");
		var choiceOfEcoTag = getTagName("Economics");
		var choiceOfCompEngTag = getTagName("Computer Engineering");
		var choiceOfElecEngTag = getTagName("Electrical Engineering");
		var courseNameId = getId("CourseName");
		var courseSelectionId = getId("CourseSection");
		var topicAndSectionId = getId("TopicAndSection");
		var todaysDateId = getId("TodaysDate");
		var dueDateId = getId("DueDate");
		var emailId = getId("Email");
		var personId = getId("Person");
		var noteSectionId = getId("NoteSection");

	//Variables
		var majorChoice = []
		
//Radio function
function getRadioInput () {
	var savedRadio = document.forms[0].turnin;
	for(var r = 0; r < savedRadio.length; r++) {
		if(savedRadio[r].checked){
			radioChoice = savedRadio[r].value;
		}
	}
}


function storeInformation () {
	var id = Math.floor(Math.random()*10000023);
	getRadioInput();

	//Get all values from the form:
	var store = {};
		store.major = ["Major By Department Schools", idTag('MajorByDepartmentSchools').value];
		store.courseName = ["Course Name", idTag('CourseName').value];
		store.courseSection = ["Course Section", idTag('CourseSection').value];
		store.topicAndSection = ["Topic and Section", idTag('TopicAndSection').value];
		store.todaysDate = ["Todays Date", idTag('TodaysDate').value];
		store.dueDate = ["Due Date ", idTag('DueDate').value];
		store.email = ["Email", emailValue];
		store.person = ["Person", personValue.value];
		localStorage.setItem(id, JSON.stringify(store));
		alert("Assignments Saved!");
}

var radioChoice;*/
/*
	var storeJSON = {
			"chooseMajorId": 
				[
					"MajorByDepartmentSchools", "chooseMajorId.value"
				],
			"courseNameId":
				[
					"CourseName", "courseNameId.value"
				],
			"courseSectionId":
				[
					"CourseSection", "courseSelectionId.value"
				],
			"topicAndSectionId":
				[
					"TopicAndSection", "topicAndSectionId.value"	
				],
			"todaysDateId":
				[
					"todaysDate", "todaysDateId.value"
				],
			"dueDateId":
				[
					"dueDate", "dueDateId.value"
				],
			"emailId":
				[
					"email", "emailId.value"
				],
			"personId":
				[
					"person", "personId.value"
				],
			"noteSectionId":
				[
					"noteSection", "noteSectionId.value"
				]
		}
	localStorage.setItem(id, JSON.stringify(storeJSON));
	alert("Assignments Saved!");
}
*/




//Creating links and Submit events
//var linkOfClear = getId("clear");
//linkOfClear.addEventListener("click", eraseInformation);
//var linkOfDisplay = getId("display");
//linkOfDisplay.addEventListener("click", retrieveInformation);




});