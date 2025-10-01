function setup(){
createCanvas(500, 500)
}
function draw(){
    background(255)
    rectMode(CENTER)
    square(mouseX, mouseY, 100)
    square(mouseX-100, mouseY-100, 100)
    square(mouseX+100, mouseY+100, 100)
}