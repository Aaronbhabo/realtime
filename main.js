noseX=0;
noseY=0;
difference = 0;
leftwristX=0;
rightwristX=0;
function setup(){
    canvas = createCanvas(700,450);
    canvas.position(500,120);
    video = createCapture(VIDEO);
    video.size(500,300);
    posenet = ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);

}

function draw(){
    background('lightgray');
    square(noseX,noseY,difference);
    stroke('blue');
    fill('cyan');
    document.getElementById("side").innerHTML="side of a square--"+difference;


    
}

function modelloaded(){
    console.log("poseNet is initialised")
    
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX-"+noseX,"noseY-"+noseY);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = leftwristX-rightwristX;
        console.log("leftwristX-"+leftwristX,"rightwristX-"+rightwristX);
        console.log("difference-"+difference);


    }
}