var diam1 = 100;
var r, g, b;
var r2, g2, b2;

function setup() {
    // put setup code here
    createCanvas(500, 500)
    background(173, 216, 230);
    fill(255, 215, 0);
    ellipse(60, 100, diam1, diam1)
    
}

function draw() {
    // put drawing code here

    fill(255, 215, 0);
    noStroke();
    //    fill(r,g,b)
    //    ellipse(60,100,diam1,diam1); 
    fill(0, 100, 0);
    triangle(499, 499, 1, 499, 1, 200);
    fill(34, 139, 34);
    triangle(499, 300, 499, 499, 1, 499);


}

function mousePressed() {

    background(173, 216, 230)

    var r2 = random(20, 48)
    var g2 = random(20, 255)
    var b2 = random(255, 255)

    background(r2, g2, b2)

    diam1 = diam1 + 9;

    if (diam1 >= 200) {
        diam1 = 60;
    }

    var r = random(255, 255)
    var g = random(255, 255)
    var b = random(100, 255)
    fill(r, g, b)
    ellipse(60, 100, diam1, diam1);



}
