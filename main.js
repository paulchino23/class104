Webcam.set({
    width: 400,
    height: 350,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'">';
});
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4vZQt-Oa0/model.json',modelLoaded);

function modelLoaded(){
    console.log('model loaded');
}