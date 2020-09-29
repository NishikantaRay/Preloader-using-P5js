// This project is created from Daniel Shiffman's purple rain youtube video.

var drops = [];

function setup() {
    createCanvas(640, 480);
    for (var i = 0; i < 100; i++) {
        drops[i] = new Drop();
    }
}

function draw() { 
    background(230,230,250);

    if (mouseIsPressed) {
        stroke(0, 0, 0);
        line(mouseX - 50, mouseY, mouseX + 50, mouseY);
    }

    for (var i = 0; i < drops.length; i++) {
        drops[i].fall(); 
        drops[i].show();
    }
}