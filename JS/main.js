/*
Alexander Herrera
Project 2
*/

window.addEventListener("DOMContentLoaded", function(){
    console.log("working");
    //alert(localStorage.key(1));
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
//var optionValue;
function saveInformation(evt){
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
        console.log(info);
        localStorage.setItem(id, JSON.stringify(info));
      //  alert("Assignment Saved!!");
      evt.preventDefault();
}
var save = idTag('submit');
save.addEventListener("click", saveInformation);
//console.log(save);

});