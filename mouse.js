img1 = "";
status = "";
function preload() {
    img1 = loadImage("IMG_3742.jpg");
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
    objectDetector.detect(img1, gotResult)
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}