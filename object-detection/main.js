img = "";
values = "";
objects = [];

function preload() {
    img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("detector").innerHTML = "Status:Detecting Objects";

}



function modelLoaded() {
    console.log("Model Loaded");
    values = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error)
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(img, 0, 0, 640, 420);
    //  fill('#2e8f94');
    // textSize(50);
    //text("Dog",100,90);
    //noFill();
    //stroke('#2e8f94');
    //rect(70,40,500,360);
    //fill("#070708");
    //  textSize(50);
    //  text("Cat",330,100);
    // noFill();
    // stroke("#070708");
    //rect(300,50,310,350);
    if (values == true) {
        for (i = 0; i < objects.length; i++) {
            document.getElementById("detector").innerHTML = "Status:Object Detected";
            fill("#08fbff");
            textSize(30)
            text(objects[i].label, objects[i].x + 20, objects[i].y + 20);
            noFill();
            stroke('#020303');
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}