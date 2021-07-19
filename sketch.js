
function preload(){
  //pre-load images
  trackImg=loadImage("path.png")
  runnerImg=loadAnimation("runner-1.png","runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,100,40,30)
  track.addImage(trackImg)
  track.velocityY=3

  runner = createSprite(200,350,20,20)
  runner.addAnimation('runner', runnerImg)
  runner.scale=0.05
}

function draw() {
  background(0);
  if(track.y > 400){
    track.y = track.height/2
  }
  runner.x = World.mouseX
  drawSprites()
}
