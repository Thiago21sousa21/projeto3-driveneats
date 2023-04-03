let scannerPrato = "";
let scannerBebida = "";
let scannerSobremesa = "";

function MostraOculta(){
   const mstoclt =  document.querySelector('.c-checkout');
   mstoclt.classList.toggle('oculto');
}
function funcPedido(){
    MostraOculta();
}

function scanner(){
    if (scannerPrato!== "" && scannerBebida!== "" && scannerSobremesa !== ""){
        const BotaoVerde = document.querySelector('.botao');
        BotaoVerde.classList.add('verde');
        BotaoVerde.innerHTML = 'Fechar pedido';
        const bottao = document.querySelector('.bottao');
        bottao.removeAttribute('disabled');
        
    }
}

function selectPrato(classe) {
  const verificador = document.querySelector('.c2-pratos .selecionado');
  if (verificador !== null) {
    verificador.classList.remove('selecionado');
  }

  const find = document.querySelector(classe);
  find.classList.add('selecionado');
   
  scannerPrato = find.querySelector('h6');
  scanner();
}


function selectBebida(classe){
    const verificador = document.querySelector('.c2-bebidas .selecionado');
    if (verificador !== null){
        verificador.classList.remove('selecionado');
    }

    const find = document.querySelector(classe);
    find.classList.add('selecionado');

    scannerBebida = find.querySelector('h6');
    scanner();
}
function selectSobremesa(classe){
    const verificador = document.querySelector('.c2-sobremesa .selecionado');
    if (verificador !== null){
        verificador.classList.remove('selecionado');
    }

    const find = document.querySelector(classe);
    find.classList.add('selecionado');

    scannerSobremesa = find.querySelector('h6');
    scanner();
}