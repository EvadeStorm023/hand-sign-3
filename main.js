Webcam.set({
    width:350,
    height:300,
    image_format : "png",
    png_quality: 90
})
camera = document.getElementById("camera");
Webcam.attach("#camera");

function snap_img(){
    Webcam.snap(function (data_uri){
     document.getElementById("result").innerHTML = "<img id='pic' src = "+data_uri+">"
    });
}
console.log("ml5 version is ",ml5.version)
c = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/c0EYnB3kv/model.json",modelLoaded)

function modelLoaded(){
    console.log("model has been loaded")
}

function Speak(){
    synth = window.speechSynthesis;
    sd  = "the first prediction is "+pd1+"And the second prediction is"+pd2;
    ut = new SpeechSynthesisUtterance(sd);
    synth.speak(ut);
}

function check(){
    img = document.getElementById("pic");
    c.classify(img, gotResult);
}

function gotResult(error, result){
    if(error){
        console.error(error)
    }
    else{
        console.log('result');
    document.getElementById("ename1").innerHTML = result[0].label;
    document.getElementById("ename2").innerHTML = result[1].label;
    pd1 = result[0].label;
    pd2 = result[1].label;
    Speak()
    if(result[0].label == 'happy'){
        document.getElementById('emname1').innerHTML = '&#128512';
        
    }
    if(result[0].label == 'sad'){
        document.getElementById('emname1').innerHTML = '&#128532';

    }
    if(result[0].label == 'angry'){
        document.getElementById('emname1').innerHTML = '&#128545';
    }
    if(result[1].label == 'angry'){
        document.getElementById('emname2').innerHTML = '&#128548';
    }
    if(result[1].label == 'happy'){
        document.getElementById('emname2').innerHTML = '&#128532';

    }
    if(result[1].label == 'sad'){
        document.getElementById('emname2').innerHTML = '&#128522';

    }
}
}
