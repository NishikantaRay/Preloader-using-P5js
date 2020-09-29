function Drop () {
    this.x = random(width);
    this.y = random(-500, -50);
    this.len = random(10, 20);
    this.speed = random(4, 10);

    this.fall = function() {
        this.y = this.y + this.speed;

        if (this.y > height || hitUmbrella(this.x, this.y, this.len, this.speed)) {
            this.x = random(width);
            this.y = random(-500, -50);
            this.len = random(10, 20);
            this.speed = random(4, 10);
        }
    }

    this.show = function() {
        strokeWeight(2);
        stroke(138, 43, 226);
        line(this.x, this.y, this.x, this.y - this.len);
    }
}

function hitUmbrella(x, y, len, speed) {
    if (mouseIsPressed) {
       if (x < mouseX + 50 && x > mouseX - 50) {
            if (y - speed < mouseY && y > mouseY) {
                console.log("HIT!");
                return true;
            }
       }
    }
}