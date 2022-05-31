status1=""
function preload() {
  video=createVideo("video.mp4")
  video.hide()
}
function setup(){
    canvas=createCanvas(640,480)
    canvas.center()                                                
}
function draw() {
  image(video,0,0,640,480)
}
function start() {
    objectdetector=ml5.objectDetector("cocossd",modelloaded)
    document.getElementById("status").innerHTML="Status : Detecting Objects"
}
function modelloaded() {
    console.log("Model is loaded")
    status1=true ;
    video.loop()
    video.speed(1)
    video.volume(0)

}