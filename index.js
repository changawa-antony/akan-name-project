
document.getElementById("submit-btn").addEventListener("click", formData);

function formData(validateForm){
    event.preventDefault();


    /* getting the values from the form */

    var dateValue = parseInt(document.getElementById("birthDate").value);
    var monthValue = parseInt(document.getElementById("birhtMonth").value);
    var yearValue = parseInt(document.getElementById("birthYear").value);
    var genderValue = document.querySelector('input[type="radio"]:checked').value;

    /*validating the date and month input*/

    if (isNaN(dateValue) || isNaN(monthValue) || isNaN(yearValue)){
        document.getElementById('display').innerHTML = "Please fill in the form";
        document.getElementById('namediv').style.display = "block";
        document.getElementById('namediv').style.backgroundColor = "red";

        return false;
    }

   if (dateValue <= 1 || dateValue > 31 || dateValue == ""){  
        document.getElementById('display').innerHTML = "Date provided is invalid";
        return false;
   }

    if( monthValue <=1 || monthValue > 12 || monthValue == "") {
        document.getElementById('display').innerHTML = "Month provided is invalid";
    return false;
    }

    if( yearValue == "" || yearValue == isNaN ){
        document.getElementById('display').innerHTML = "Year provided is invalid";
        return false
        
    }


    else{

        /* Getting last 2 digits of the year */
        
        var strYear = yearValue.toString();
        var shortYear = strYear.substr(-2);
        var yy = parseInt(shortYear);
        
        /*Getting century period */

        var cc = Math.ceil(yearValue/100);

        /* Getting day of birth */

        var getday =(((cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(monthValue+1)/10)) + dateValue) % 7;
        var day = Math.floor(getday);

        /* Getting Akan name */

        var maleAkan = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        var femaleAkan = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

        if (genderValue == "female"){
            var akanName = femaleAkan[day];
        }
        else{
            var akanName = maleAkan[day];
        }

        document.getElementById('display').innerHTML = "Your Akan Name is " +akanName;
        document.getElementById('namediv').style.display = "block";
        document.getElementById('namediv').style.backgroundColor = "rgb(255, 192, 74)";
     
    };

    document.getElementById("myForm").reset();

};
   

    