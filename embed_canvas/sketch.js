const words = ["brown", "fox", "jumped", "quickly"];
const numbers = [18, 36, 24, 12];
let index = 0;

function setup() {
    myCanvas = createCanvas(400, 400);
    myCanvas.parent('myContainer');

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
}
