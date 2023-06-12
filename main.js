function startClassification()
{
navigator.mediaDevices.getUserMedia({audio: true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/g4rJVrADn/model.json', modelReady);
}
function modelReady(){
classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
    console.error(error);
    } else{
    console.log(results);
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;
    
    document.getElementById("result_label").innerHTML='I can hear - '+
    results[0].label;
    document.getElementById("result_confidence").innerHTML='Accuracy - '+
    (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color="rgb("
    +random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color="rgb("
    +random_number_r+","+random_number_g+","+random_number_r+")";
    
    img=document.getElementById('animal1');
    img1=document.getElementById('animal2');
    img2=document.getElementById('animal3');
    img3=document.getElementById('animal4');
    img4=document.getElementById('animal5');
    
    if(results[0].label=="Mooing"){
    img.src='animal-01.jpg';
    img1.src='animal-02.jpg';
    img2.src='animal-03.jpg';
    img3.src='animal-04.gif';
    img4.src='animal-05.jpg';
    } else if (results[0].label=="Clucking"){
        img.src='animal-01.gif';
        img1.src='animal-02.jpg';
        img2.src='animal-03.jpg';
        img3.src='animal-04.jpg';
        img4.src='animal-05.jpg';
    } else if(results[0].label=="Meowing"){
        img.src='animal-01.jpg';
        img1.src='animal-02.jpg';
        img2.src='animal-03.gif';
        img3.src='animal-04.jpg';
        img4.src='animal-05.jpg';
    }else if(results[0].label=="Barking"){
        img.src='animal-01.jpg';
        img1.src='animal-02.gif';
        img2.src='animal-03.jpg';
        img3.src='animal-04.jpg';
        img4.src='animal-05.jpg';
    } else{
        img.src='animal-01.jpg';
        img1.src='animal-02.jpg';
        img2.src='animal-03.jpg';
        img3.src='animal-04.jpg';
        img4.src='animal-05.gif';
    }
    }
    }