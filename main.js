function preload(){
    classificador=ml5.imageClassifier("DoodleNet");
};
function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    background("white");
    canvas.mouseReleased(adivinhe);
    sintetizador=window.speechSynthesis;
}
 function apagar(){
    background("white");
 }
 function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX, pmouseY,mouseX,mouseY)
    }
 }
 function tirarFoto(){
    save("MeuCanvas.png")
 }
  function adivinhe(){
    classificador.classify(canvas,resultados);
  }
  function resultados(erro,result){
   if(erro){
    console.error(erro);
   }
   else{
    console.log(result);
    document.getElementById("nomeDesenho").innerHTML="Desenho: "+result[0].label;
    document.getElementById("precisao").innerHTML="Precisão: "+Math.round(result[0].confidence*100)+"%";
    voz=new SpeechSynthesisUtterance(result[0].label);
    sintetizador.speak(voz)
}

  }