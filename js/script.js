var squareSide = document.getElementById("squareSide")
function btnluas(){
    var s = squareSide.value;
    var luas = s*s;
    document.getElementById("hasilluas").innerHTML="Luas persegi dengan adalah " + luas;
    document.getElementById("hasilkel").innerHTML="";
}

function btnkel(){
    var s = squareSide.value;
    var kel = 4*s;
    document.getElementById("hasilkel").innerHTML="Keliling persegi adalah " + kel;
    document.getElementById("hasilluas").innerHTML=""
}

function btnreset(){
    squareSide.value = "";
    document.getElementById("hasilluas").value = "";
    document.getElementById("hasilkel").value = "";
}