/*
Alexander Herrera
Project 2
For the browser I used Google Chrome, Safari web inspector hardly worked
*/


window.addEventListener("DOMContentLoaded", function () {
    console.log("working");
    //alert(localStorage.value(0));
//Variables:
    var departmentMajors = ["--Choose Major--", 
                        "Architecture", 
                        "Biology", 
                        "Mathematics", 
                        "Accounting",
                        "Economics", 
                        "Computer Engineering", 
                        "Electrical Engineering"];
    console.log(departmentMajors);
    var linkOfClear = idTag("clear");
    linkOfClear.addEventListener("click", eraseInformation);
    var linkOfDisplay = idTag("display");
    linkOfDisplay.addEventListener("click", getInfoToDisplay);
    var save = idTag('submit');
    save.addEventListener("click", saveInformation);
   
    

//Getting the elements by id
    function idTag (e) {
        var tagId = document.getElementById(e);
        return tagId;
    }
//Getting the elements by tag name
    function tagName (n) {
        var nameOfTag = document.getElementsByTagName(n);
        return nameOfTag;
    }
//Create an Element 
    function makeTag (c) {
        var createNewTag = document.createElement(c);
        return createNewTag;
    }
//Radio Selection function  
    function getSelectionRadio () {
        var buttonRadio = idTag("collegeForm").turnin;
        for (var i = 0; i < buttonRadio.length; i++){
            if (buttonRadio[i].checked){
               optionValue = buttonRadio[i].value;         
           }
        }
    }
     

//To save all of the information in local storage
    function saveInformation () {
        var id                = Math.floor(Math.random()*1000292002);
        getSelectionRadio();
        var info              = {};
            info.major        = ["Major Choice:", idTag("selectMajor").value];
            info.cName        = ["Course Name:", idTag("courseName").value];
            info.cSection     = ["Course Section:", idTag('courseSection').value];
            info.topicAndSec  = ["Topic and Section:", idTag('topicAndSection').value];
            info.todaysDate   = ["Today's Date:", idTag('todaysDate').value];
            info.dueDate      = ["Due Date:", idTag('dueDate').value];
            info.option       = ["Turn In Option:", optionValue];
            info.note         = ["Note Section:", idTag('noteSection').value];
        console.log(info.value);
        localStorage.setItem(id, JSON.stringify(info));
        alert("Assignment Saved!!");
    }
    function createMajorList () {
        var getForm = tagName("form");
        var getDepartmentsId = idTag("departments");
        var createSelectTag = makeTag("Select");
        createSelectTag.setAttribute("id", "selectMajor");
        for (var i = 0, l = departmentMajors.length; i < l; i++) {
            var createOptionTag = makeTag("option");
            var optionInArray = departmentMajors[i];
            createOptionTag.setAttribute("value", optionInArray);
            createOptionTag.innerHTML = optionInArray; 
            createSelectTag.appendChild(createOptionTag);
        }
        getDepartmentsId.appendChild(createSelectTag);
    }
   createMajorList();
//In what way to display the local storage    
    function visibilityOfElement (v) {
        switch (v) {
            case "on":
                idTag('collegeForm').style.display = "none";
                idTag('clear').style.display = "inline";
                idTag('display').style.display = "none";
                idTag('add').style.display = "inline";
                break;
            case "off":
                idTag('collegeForm').style.display = "block";
                idTag('clear').style.display = "inline";
                idTag('display').style.display = "inline";
                idTag('add').style.display = "none";
                idTag('items').style.display = "none";
                break;
            default:
                return false;
        }
    }
//Delete the information from the local Storage    
    function eraseInformation () {
        if (localStorage.length === 0){
            alert("You haven't stored any Assignment Information!");
        } else {
            localStorage.clear();//Delete everything in the localStorage
            alert("All of your Assignment Information have been deleted");
            window.location.reload();
            return false;//Stopping the link to go anywhere when reloaded
        }
    }
//Safety check 
    function displayCheck () {
        if (localStorage.length === 0){
            alert("No Assignments have been saved!");
        }
    }

    function getInfoToDisplay () {
        visibilityOfElement("on");
        displayCheck();
        var createDiv = makeTag('div');
        createDiv.setAttribute("id", "items");
        var createRoster = makeTag('ul');
        createDiv.appendChild(createRoster);
        document.body.appendChild(createDiv);
        idTag('items').style.display = "block";//Just to make sure it does display
        for (var i = 0, w = localStorage.length; i < w; i++) {
            var createFirstListTag = makeTag('li');
            createRoster.appendChild(createFirstListTag);
            var getKey = localStorage.key(i);
            var keyValue = localStorage.getItem(getKey);
            var localStorageObject = JSON.parse(keyValue);
            var anotherUnorderListTag = makeTag('ul');
            createFirstListTag.appendChild(anotherUnorderListTag);
            for (var s in localStorageObject) {
                var createAnotherList = makeTag('li');
                anotherUnorderListTag.appendChild(createAnotherList);
                var listInfoText = localStorageObject[s][0]+ " " + localStorageObject[s][1];
                createAnotherList.innerHTML = listInfoText;
            }
        }
    }



 
});