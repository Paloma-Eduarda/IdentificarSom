function iniciar(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classificar = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/bkaDrKcBl/model.json", modelReady);  
}
function modelReady(){
    classificar.classify(gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);

        document.getElementById("resultado_label").innerHTML = "Posso ouvir - " + results[0].label;
        document.getElementById("resultado_precisao").innerHTML = 
            "Precisão -" + (results[0].confidence*100).toFixed(2)+"%";

       img = document.getElementById('alien1');
       img2 = document.getElementById('alien2'); 
       img3 = document.getElementById('alien3');
       img4 = document.getElementById('alien4');

       if(results[0].label == "Palmas"){

        img.src = "aliens-01.gif";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.png";
        img4.src = "aliens-04.png";

       }if(results[0].label == "Sino"){

        img.src = "aliens-01.png";
        img2.src = "aliens-02.gif";
        img3.src = "aliens-03.png";
        img4.src = "aliens-04.png";

       }
       if(results[0].label == "Ruído de fundo"){

        img.src = "aliens-01.png";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.gif";
        img4.src = "aliens-04.png";

       }
       if(results[0].label == "Estalos"){

        img.src = "aliens-01.png";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.png";
        img4.src = "aliens-04.gif";

       }

    }
}