

function scroll(id) {
    
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 720, function () {
        window.location.hash = id;
    });

}
$(function () {

    console.log("Apresentando seções");

    $("#Secao1").on("click", function () {
        console.log("IR PARA A HOME");
        scroll("#secao1");
    });

    $("#Secao2").on("click", function () {
        console.log("funcao ir para secao 1 acionada..");
        scroll("#secao2");
    });

    $("#Secao3").on("click", function () {
        console.log("funcao ir para secao 2 acionada..");
        scroll("#secao3");
    });
    $("#Secao4").on("click", function () {
        console.log("funcao ir para secao 2 acionada..");
        scroll("#secao4");
    });
    $("#Secao5").on("click", function () {
        console.log("ir para as referencias..");
        scroll("#secao5");
    });
    $("#Secao6").on("click", function () {
        console.log("ir para as referencias..");
        scroll("#secao6");
    });
    $("#Secao7").on("click", function () {
        console.log("funcao ir para secao 7 acionada..");
        scroll("#secao7");
    });
    
    $("#Secao8").on("click", function () {
        console.log("ir para Formularios..");
        scroll("#secao8");
    });
    $("#Secao9").on("click", function () {
        console.log("ir para as referencias..");
        scroll("#secao9");
    });

    

});

function altoContraste() {
    console.log("funcao gerenciar alto contraste");
    $("body").css("background-color","black");
    $("body").css("color","rgb(255, 231, 17)");
}


function extraContraste() {
    console.log("funcao gerenciar alto contraste");
    $("body").css("background-color","rgba(127, 47, 180, 0.774)");
    $("body").css("color","rgb(255, 255, 255)");
}

function ContrasteReverso() {
    console.log("funcao gerenciar alto contraste");
    $("body").css("background-color","rgb(255, 255, 255)");
    $("body").css("color","rgb(0, 0, 0)");
}




$(document).ready(function()
{ 
  
    console.log("Entrou no window onload..funcionou o JS");
   
    $("#btn-firstContraste").on("click", altoContraste);   

    $("#btn-secondContraste").on("click", extraContraste); 

    $("#btn-threecolor").on("click", ContrasteReverso);

});

