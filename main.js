//https://teachablemachine.withgoogle.com/models/pje28U0Dy/
Webcam.set({
    height:300,
    width:350,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_photo() {
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_url+"'>";
    });
}
console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/pje28U0Dy/model.json",modelloaded);
function modelloaded(){
    console.log("Model loaded");
}

function predict() {
    img=document.getElementById("captured_image");
    classifier.classify(img,getResult);
  }
  function getResult(error,results) {
      if(error){
          console.error(error);
      }
      else{
          console.log(results);
          document.getElementById("result_hand_name").innerHTML=results[0].label;
          document.getElementById("result_hand_name2").innerHTML=results[1].label;
   
          if(results[0].label=="Pointing"){
              document.getElementById("update_hand").innerHTML="&#9754;"+"&nbsp"+"&#9755;"+"&nbsp"+"&#9756;"+"&nbsp"+"&#9757;"+"&nbsp"+"&#9758;"+"&nbsp"+"&#9759;"+"&nbsp"+"&#128070;"+"&nbsp"+"&#128071;"+"&nbsp"+"&#128072;"+"&nbsp"+"&#128073;";
          }
          else if(results[0].label=="Thumbs"){
              document.getElementById("update_hand").innerHTML="&#128077;"+"&nbsp"+"&#128077;";
          }
          else if(results[0].label=="Clap"){
              document.getElementById("update_hand").innerHTML="&#128075;"+"&nbsp"+"&#128079;";
          }
  
          if(results[1].label=="Pointing"){
            document.getElementById("update_hand").innerHTML="&#9754;"+"&nbsp"+"&#9755;"+"&nbsp"+"&#9756;"+"&nbsp"+"&#9757;"+"&nbsp"+"&#9758;"+"&nbsp"+"&#9759;"+"&nbsp"+"&#128070;"+"&nbsp"+"&#128071;"+"&nbsp"+"&#128072;"+"&nbsp"+"&#128073;";
        }
        else if(results[1].label=="Thumbs"){
            document.getElementById("update_hand").innerHTML="&#128077;"+"&nbsp"+"&#128077;";
        }
        else if(results[1].label=="Clap"){
            document.getElementById("update_hand").innerHTML="&#128075;"+"&nbsp"+"&#128079;";
        }
  
      }
  }
