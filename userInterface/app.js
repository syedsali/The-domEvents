// Using onload on an <img> element.
//  Alert "Must be 18+" immediately after an image has been 
//  loaded:
//Add prompts that asks the age and verifies it. 

function myFunction() {
    alert("You Must be 18+");
  };

  var birthYear= prompt ('What Year You were Born?');

    if(birthYear > 1980) {
        alert("Sorry You Have To 18+");
        
    }
    else if(birthYear < 2003 || birthYear > 1980){
        alert ("Welcome");
    }
  