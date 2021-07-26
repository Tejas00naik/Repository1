
var time=0;
var squareWave=[];
//time period = 1 time unit
var slider;
//var dutyCycle=slider.value()/10;
var counter=0;

function setup(){
   createCanvas(900,600);
   slider = createSlider(0,10,1);

}
function draw(){
  stroke(255);
  //if (time>1) time=0;
  background(0);
  translate(60,300);

  if (counter<(slider.value()/10)*100){ squareWave.unshift(0);}
  else squareWave.unshift(150);



  beginShape();
  stroke(255);
  noFill();
  for(var j = 0;j<squareWave.length;j++){

     vertex(j,squareWave[j]);

  }

  endShape();

  time+=0.01;
  if (squareWave.length>700) {squareWave.pop();}
  counter++;
  if (counter>100) {
    counter=0;
  }
}
