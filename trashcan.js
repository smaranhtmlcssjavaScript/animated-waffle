img = "";
status = "";
objects = [];
function preload() {
    img = loadImage("IMG_3743.jpg");
}
function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("model is loaded");
    status = true;
    objectDetector.detect(img, gotResult)
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function draw() {
    image(img, 0, 0, 420, 420);
    if (status != "") {
        r = random(255);
        g = random(255);
        b = random(255);
        for (i=0; i<objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

        }
    }
}