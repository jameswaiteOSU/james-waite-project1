const words = ["brown", "fox", "jumped", "quickly"];
const numbers = [18, 36, 24, 12];
let index = 0;

function setup() {
    /* stores the p5 canvas object into a variable,
    then parents that object to an HTML element with
    id='myContainer' */
    myCanvas = createCanvas(400, 400);
    myCanvas.parent('myContainer');
    // sets up an interval that calls a function
    setInterval(changeInterval, 1000);
}

function draw() {
    background(150);
    textAlign(CENTER, CENTER);
    textSize(numbers[index])
    text(words[index], width/2, height/2);
}

function changeInterval() {
    index++;
    (index >= words.length) ? index = 0 : null;
    /* 
    if (index >= words.length) {
       index = 0; 
    } 
    */
}
