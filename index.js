
var n=document.querySelectorAll(".drum").length;
var audio1 = new Audio('sounds/kick-bass.mp3'); // using Audio class to create new audio object and give the object a personalised value i.e our audio file.
function handleClick(){
//this.style.color="white";  //gets the value of which button is clicked
//  audio1.play();                    //calling the audio

  var buttonInnerHTML=this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}


for(var i=0;i<n;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
  document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
  });
}
function makeSound(key){
  switch (key){
  case "a":
    var tom1=new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;

  case "s":
  var tom2=new Audio('sounds/tom-2.mp3');
  tom2.play();
  break;

  case "w":
  var tom3=new Audio('sounds/tom-3.mp3');
  tom3.play();
  break;

  case "d":
  var tom4=new Audio('sounds/tom-4.mp3');
  tom4.play();
  break;

  case "j":
  var snare=new Audio('sounds/crash.mp3');
  snare.play();
  break;

  case "k":
  var kick=new Audio('sounds/kick-bass.mp3');
  kick.play();
  break;

  case "l":
  var crash=new Audio('sounds/snare.mp3');
  crash.play();
  break;
}
}
function buttonAnimation(currentkey){
  var activeButton=document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
