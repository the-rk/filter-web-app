function preload(){
 mustache_img = loadImage('https://i.postimg.cc/Hxkvddw1/mustache-png-1.png');
}
noseX = 0;
noseY =0;
function setup(){
    canvas = createCanvas(350,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotposes);
}
 function draw(){
   image(video,0,0,350,300);
   image(mustache_img,noseX,noseY,40,30);
 }

 function take_snapshot(){
     save("realtime_filter.png");
 }

 function modelLoaded(){
     console.log("pose-net is intialized");
 }

 function gotposes(results){
     if(results.length >0){
         console.log(results);
         console.log("nose x = "+ results[0].pose.nose.x);
         console.log("nose y = "+ results[0].pose.nose.y);
         noseX = results[0].pose.nose.x-15;
         noseY =results[0].pose.nose.y+1;
     }
 }