// Use an addEventListener
//  to attach a "mouseover" and "mouseout" event to a h3 element.
//The h3 should change size when mouseovered

document.getElementById("mouse").addEventListener("mouseover", mouseOver);
document.getElementById("mouse").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("mouse").style.fontSize = "30px";
  }
  
  function mouseOut() {
    document.getElementById("mouse").style.fontSize = "20px";
  };




//Part II
// Use an addEventListener
//  to attach a "mouseover" and "mouseout" element that asks 
// and answers a trivia question
