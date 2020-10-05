

function scrollPara(id) {
    
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 800, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = id;
    });

}


// documento carregado <-> void main(){ .....
/* window.onload garante que a pagina sera carregada
   no browser do cliente, e apos o carregamento, pode-se
   definir os scripts que serao executados  */
// window.onload = function () { // js nativo

$(function () { // jquery

    console.log("documento carregado..");

    // exemplo de funcao definida inline (funcao anonima)
    $("#Secao1").on("click", function () {
        console.log("funcao ir para secao 0 acionada..");
        scrollPara("#secao0");
    });

    $("#Secao2").on("click", function () {
        console.log("funcao ir para secao 1 acionada..");
        scrollPara("#secao1");
    });

    $("#Secao3").on("click", function () {
        console.log("funcao ir para secao 2 acionada..");
        scrollPara("#secao2");
    });

    


});

