// The event handler onFocus is fired when a form element gets 
// the focus.
// Similarly, the onblur event handler is fired when the form 
// element loses focus, i.e when the cursor moves away from form field
//add an alert box that responses to the onclick alerting the
// user before they fill out the form


var color = document.getElementById('myForm');
color.addEventListener('focus', myFocusFunction, true);
color.addEventListener('blur', myBlurFunction, true);

function myFocusFunction(){
    document.getElementById('name').style.backgroundColor="lightBlue";
    document.getElementById('city').style.backgroundColor="lightBlue";
}

function myBlurFunction(){
    document.getElementById('name').style.backgroundColor="white";
    document.getElementById('city').style.backgroundColor="white";
    window.alert("Please Click On Name or City tab")
}

