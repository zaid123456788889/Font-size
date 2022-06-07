noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;


function setup(){
    canvas = createCanvas(550 , 550);
    canvas.position(560 , 150);

    video = createCapture(VIDEO);
    video.size(550 , 500);

 poseNet = ml5.poseNet(video , modelLoaded);
 poseNet.on('pose' , gotPoses)   
}

function modelLoaded(){
    console.log("PoseNet is initialised!")
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;

leftWristX  = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);

console.log("leftWristX = "+ leftWristX+ ", rightWristX ="+rightWristX+", difference ="+difference);
}
}

function draw(){
    background("#969A97")
document.getElementById("square_side").innerHTML = "Width and Height of the square will be " +difference+ "px";
textSize(difference);
    fill("red");
    text('Zaid', 50, 400);
}