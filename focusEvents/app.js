// When you enter the input field, a function is triggered which sets the background 
// color to skyBlue. When you leave the input field, 
// a function is triggered which sets the background color to grey.

var color = document.getElementById('myForm');
color.addEventListener('focus', myFocusFunction, true);
color.addEventListener('blur', myBlurFunction, true);

function myFocusFunction(){
    document.getElementById('text').style.backgroundColor="lightBlue";
    document.getElementById('date').style.backgroundColor="lightBlue";
}

function myBlurFunction(){
    document.getElementById('text').style.backgroundColor="white";
    document.getElementById('date').style.backgroundColor="white";
}