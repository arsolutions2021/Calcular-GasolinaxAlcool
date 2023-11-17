var etanol,gasolina;

function calcular(){
    etanol = parseFloat(frmFlex.etanol.value.replace(",",".")); 
    gasolina = parseFloat(frmFlex.gasolina.value.replace(",", "."));


    if (etanol < 0.7 * gasolina){

        document.getElementById("status").src="img/alcool.png";
        

    }else{

        document.getElementById("status").src = "img/gasolina.png";
        

    }
    
}

function resetar(){

    document.getElementById("status").src = "img/neutro.png";
}
