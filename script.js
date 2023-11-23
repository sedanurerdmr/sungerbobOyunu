const plankton = document.querySelector("#plankton")
const sungerbob = document.querySelector("#sungerbob")

function zipla(){

    if(plankton.classList != "plankton-animate"){
        plankton.classList.add("plankton-animate");
    }


    if(sungerbob.classList != "sungerbob-animate"){
    sungerbob.classList.add("sungerbob-animate");
    setTimeout(function(){
        sungerbob.classList.remove("sungerbob-animate");
    },500);
}
}


var carpismaKontrol = setInterval(function(){

    var sungerbobBottom =parseInt( window
        .getComputedStyle(sungerbob)
        .getPropertyValue("bottom"));

    var planktonLeft =parseInt( window
        .getComputedStyle(plankton)
        .getPropertyValue("left"));

    if(planktonLeft> 0 && planktonLeft <40 && sungerbobBottom < 27){
        plankton.classList.remove("plankton-animate")
        plankton.style.display="none";
        alert("oyun bitti")
    }
},10)
