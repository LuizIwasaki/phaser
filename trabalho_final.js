

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

    


});

function altoContraste() {
    console.log("funcao gerenciar alto contraste");
    $("body").toggleClass("first-color");
    

}
$(document).ready(function(){ // jquery
  

    console.log("Entrou no window onload..funcionou o JS");
   
    $("#firstContraste").on("click", altoContraste);   


});


function segundo() {
    console.log("funcao gerenciar alto contraste");
    $("body").toggleClass("secondcolor");

}
$(document).ready(function()
{ 
  

    console.log("Cor extra em funcionamento");
   
    $("#secondContraste").on("click", segundo);   

});

function ContrasteReverso() {
    console.log("funcao gerenciar alto contraste");
    $("firstcolor").toggleClass("threecolor");
    

}
$(document).ready(function(){ // jquery
  

    console.log("Contraste Normal em funcionamento");
   
    $("#normalContraste").on("click", ContrasteReverso);


});