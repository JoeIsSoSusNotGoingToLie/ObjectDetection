function setup() {
    canvas = createcanvas(640, 420);
    canvas.center();
}
img = "";

function preload(){
img = loadimage('dog_cat.jpg')
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("dog", 45, 75);
    noFill();
   Stroke("#FF0000");
   Rect(30, 60, 450, 350);
}
