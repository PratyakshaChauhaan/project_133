Status = "";
fb_image = "";

function preload(){
    fb_image = loadImage("bedroom.jpg");
}
function setup(){
    canvas = createCanvas(640,350);
    canvas.position(400,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(fb_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(fb_image,0,0,640,350);
    if(status != "")
    {
        for(i=0; i<object.length; i++){
         document.getElementById("status").innerHTML = "Status: object detected";
         fill("#fc0303");
         percent= floor(object[i].confidence*100);
         text(object[i].label+" "+percent+"%", object[i].x-450, object[i].y-150);
         noFill();
         stroke("#fc0303");
         rect(object[i].x-450, object[i].y-150, object[i].width-200, object[i].height-150);
        }
   }
}

function back()
{
    window.location = "index.html";
}