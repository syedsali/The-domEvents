//  Caps Lock Activated?
// Write some text in the input field,
//  using the Cap Lock key on and off in the input field:

// Hint: The getModifierState() method

function myCapsLock(event){
    var x = event.getModifierState('CapsLock');
    document.getElementById('caps'.innerHTML)= 'Caps Lock is On' + x;
}