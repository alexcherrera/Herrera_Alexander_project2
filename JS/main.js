/*
Alexander Herrera
Project 2
*/

window.addEventListener("DOMContentLoaded", function(){

//Getting the elements by id
	function idTag(e) {
		var elementId = document.getElementById(e);
		return elementId;

}


//Getting the element by tag name
	function tagName (t) {
		var tagName = document.getElementsByTagName(t);
		return tagName;
	}
//Variables


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
*/
//Radio function
function getRadioInput () {
	var savedRadio = document.forms[0].turnin;
	for(var r = 0; r < savedRadio.length; r++) {
		if(savedRadio[r].checked){
			radioChoice = savedRadio[r].value;
		}
	}
}



function saveInformation () {
	var id = Math.floor(Math.random() * 10000023);
	getRadioInput();

	//Get all values from the form:
	var store = {};
		store.major = ["Major By Department Schools", idTag("MajorByDepartmentSchools").value];
		store.courseName = ["Course Name", idTag("CourseName").value];
		store.courseSection = ["Course Section", idTag("CourseSection").value];
		store.topicAndSection = ["Topic and Section", idTag("TopicAndSection").value];
		store.todaysDate = ["Todays Date", idTag("TodaysDate").value];
		store.dueDate = ["Due Date ", idTag("DueDate").value];
		store.email = ["Email", idTag("Email").value];
		store.person = ["Person", idTag("Person").value];
		localStorage.setItem(id, JSON.stringify(store));
		alert("Assignments Saved!");
}

var radioChoice;
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

saveInformation();


//Creating links and Submit events
//var linkOfClear = getId("clear");
//linkOfClear.addEventListener("click", eraseInformation);
//var linkOfDisplay = getId("display");
//linkOfDisplay.addEventListener("click", retrieveInformation);
var linkOfSave = idTag("submit");
linkOfSave.addEventListener("click", saveInformation);











});