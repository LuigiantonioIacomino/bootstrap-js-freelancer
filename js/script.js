let prezzoCommissione="";
let PrezzoFinaleScreen=document.getElementById('prezzoFinale');

let arrayCodiciSconto=["YHDNU32","JANJC63","PWKCN25","SJDPO96","POCIE24"];


let Form=document.getElementById("form");
Form.addEventListener("submit",function(event) {
    event.preventDefault();
    let codiceSconto=document.getElementById("input5").value;
    let typeOfWork=document.getElementById('seleziona').value;
    let oreLavoro=document.getElementById("input0").value;
    oreLavoro=parseInt(oreLavoro);
    if(typeOfWork=="Front-end") {
        if(arrayCodiciSconto.includes(codiceSconto)) {
        prezzoCommissione=oreLavoro*15.30;
        prezzoCommissione*=0.25;
        }
        else{
            console.log("codice inserito non valido")
          prezzoCommissione=oreLavoro*15.30;
        }
    }
    else if(typeOfWork=="Back-End") {
        if(arrayCodiciSconto.includes(codiceSconto)) {
            prezzoCommissione=oreLavoro * 20.50
            prezzoCommissione*=0.25;
            }
            else{
              prezzoCommissione=oreLavoro*20.50;
              console.log("codice inserito non valido")
            }
    }
    else if(typeOfWork=="Project Analisys") {
        if(arrayCodiciSconto.includes(codiceSconto)) {
            prezzoCommissione=oreLavoro * 33.60;
            prezzoCommissione*=0.25;
            }
            else{
            prezzoCommissione=oreLavoro * 33.60;
            console.log("codice inserito non valido")
            }
    }
    PrezzoFinaleScreen.innerHTML=prezzoCommissione.toFixed(2)+"€";
})

