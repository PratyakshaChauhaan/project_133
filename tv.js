status = "";
tv_image = "";
object = [];

function preload(){
    tv_image = loadImage("t.v.jpg");
}
function setup(){
    canvas = createCanvas(640,350);
    canvas.position(400,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    object_Detector.detect(tv_image,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    object = results; 
}

function draw(){
    image(tv_image,0,0,640,350);
    if(status != "")
    {
        for(i=0; i<object.length; i++){
         document.getElementById("status").innerHTML = "Status: object detected";
         fill("#fc0303");
         percent= floor(object[i].confidence*100);
         text(object[i].label+" "+percent+"%", object[i].x-150, object[i].y-150);
         noFill();
         stroke("#fc0303");
         rect(object[i].x-150, object[i].y-150, object[i].width-500, object[i].height-300);
        }
   }
} 

function back()
{
    window.location = "index.html";
}