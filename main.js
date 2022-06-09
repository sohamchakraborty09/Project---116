noseX=0;
noseY=0;

function preload() {
maustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');

}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video  = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
       
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
        
    }
}
function modelLoaded(){
    console.log('posenet is initialized');
}
function draw() {
  image(video, 0, 0, 300, 300);
  fill(255,0,0);
  stroke(255,0,0);
  image(maustache, noseX-24, noseY+3, 50, 30);
  
}
function take_snapshot() {
    save('myfilteredimage.png')
}