
/* Arrays to store akan names

var maleAkan = [Kwasi, Kwadwo, Kwabena, Kwaku, Yaw, Kofi, Kwame];
var femaleAkan = [Kwasi, Kwadwo, Kwabena, Kwaku, Yaw, Kofi, Kwame];

*/

window.onload = function() {
    var dataCollect = document.getElementById("submit-btn");
    dataCollect.onclick = formDataValidation;

};


function formDataValidation(){

    /* getting the values from the form */

    var dateValue = parseInt(document.getElementById("birthDate").value);
    var monthValue = parseInt(document.getElementById("birhtMonth").value);
    var yearValue = parseInt(document.getElementById("birthYear").value);
    var maleValue = parseInt(document.getElementById("genderMale").value);
    var femaleValue = parseInt(document.getElementById("genderFemale").value);


    /*validating the data*/

    if (dateValue <= 0 || dateValue > 31){  
        document.getElementById("datespace").innerHTML="Enter a valid date";  
    }
      else{
        return true;
    };

    /*validating month*/
    if (monthValue <= 0 || monthValue > 12){  
        document.getElementById("monthspace").innerHTML="Enter a valid date";  
    }
      else{
        return true;
    };


   
    

    

}



