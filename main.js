img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload()
{
  img = loadImage("mario05.png");
}

function setup() {
  canvas = createCanvas(650, 400);
  video = createCapture(VIDEO);
  video.size(600,300);

  poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function gotPoses(results){
	if(results.length > 0){
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
console.log("noseX = " + noseX +", noseY = "+ noseY);
		
	}
}

function modelLoaded(){
	console.log('Model Loaded!');

}

function draw() {
  background("#D3D3D3");
  image(img,marioX, marioY, 40,70);
}





function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
canvas.parent('canvas');

	instializeInSetup(mario);
}

function draw() {
	game()
}






