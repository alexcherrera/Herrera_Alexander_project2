/*
Alexander Herrera
Project 2
*/

window.addEventListener("DOMContentLoaded", function(){
//Getting the elements by id
	function getId(e) {
		var elementId = document.getElementById(e);
		return elementId;

}


//Getting the element by tag name
	function getTagName (t) {
		var tagName = document.getElementsByTagName(t);
		return tagName;
	}
//Variables


//Get all data by id & tags
	function  formInformation() {
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
	}
formInformation();

//Storage:
function saveInformation () {
	var id = Math.floor(Math.random() * 10000023);
	//Get all values from the form:
	var storeJSON = {
			"majorId": 
				[
					"MajorByDepartmentSchools", "chooseMajorId".value
				],
			"courseNameId":
				[
					"CourseName", "courseNameId".value
				],
			"CourseSectionId":
				[
					"CourseSection", "courseSelectionId".value
				],
			"TopicAndSectionId":
				[
					"TopicAndSection", "topicAndSectionId".value	
				],
			"todaysDateId":
				[
					"todaysDateId", "todaysDateId".value
				],
			"dueDateId":
				[
					"dueDateId", "dueDateId".value
				],
			"emailId":
				[
					"emailId", "emailId".value
				],
			"personId":
				[
					"personId", "personId".value
				],
			"noteSectionId":
				[
					"noteSectionId", "noteSectionId".value
				],
		}
	localStorage.setItem (id, JSON.stringify(storeJSON));
	alert("Assignments Saved!");
}


saveInformation();

//Creating links and Submit events
//var linkOfClear = getId("clear");
//linkOfClear.addEventListener("click", eraseInformation);
//var linkOfDisplay = getId("display");
//linkOfDisplay.addEventListener("click", retrieveInformation);
var linkOfSave = getId("submit");
linkOfSave.addEventListener("click", saveInformation);











});