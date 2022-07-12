status1 = ""
object = []

function preload() {
  video = createVideo("video.mp4")
  video.hide()
}

function setup() {
  canvas = createCanvas(640, 480)
  canvas.center()
}

function start() {
  objectdetector = ml5.objectDetector("cocossd", modelloaded)
  document.getElementById("status").innerHTML = "Status : Detecting Objects"
}

function stop() {
  video.stop();
}

function modelloaded() {
  console.log("Model is loaded")
  status1 = true;
  video.loop()
  video.speed(1)
  video.volume(0)
}

function getresults(error, results) {
  if (error) {
    console.log(error)
  } else {
    console.log(results)
    object = results
  }
}

function draw() {
  image(video, 0, 0, 640, 480)
  if (status1 != "") {
    objectdetector.detect(video, getresults)
    for (i = 0; i < object.length; i++) {
      document.getElementById("status").innerHTML = "status : object detected"
      document.getElementById("Number").innerHTML = "Number of objects detected:" + object.length
      fill("#ff0000")
      percent = floor(object[i].confidence * 100)
      text(object[i].label + " " + percent + "%", object[i].x, object[i].y)
      noFill()
      stroke("#ff0001")
      rect(object[i].x, object[i].y, object[i].width, object[i].heght)
    }
  }
}