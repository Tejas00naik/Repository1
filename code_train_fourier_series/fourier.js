var time = 0;
var wave = [];

var slider;

function setup() {
  createCanvas(2000, 750);
  slider = createSlider(1,200, 1);
}

function draw()
{
  //if (time>1) time=0;
  background(0);
  translate(450,200);

  var x = 0;
  var y = 0;

  for (var i = 0; i < slider.value(); i++) {

    var prevx = x;
    var prevy = y;

    var n = i * 2 + 1;
    var radius = 100 / n;
    x += radius * cos(n * time);
    y += radius * sin(n * time);



    stroke(50);
    ellipse(prevx, prevy, radius*2);



    stroke(255);
    noFill();
    line(prevx, prevy, x, y);

  }
  wave.unshift(y);

  translate(450, 0);
  line(x - 450, y, 0, y);
  beginShape();

  for ( i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  //translate(-300,250);

  time += 0.01;

  if (wave.length > 1000) {
    wave.pop();
  }


}
