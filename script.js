let scannerPrato = "";
let scannerBebida = "";
let scannerSobremesa = "";

function MostraOculta(){
   /* const mstoclt =  document.querySelector('.c-checkout');
   mstoclt.classList.toggle('oculto'); */
}
function funcPedido(){
    let enviantepratoValor = document.querySelector('.c2-pratos .selecionado h6');
    let recebentepratoValor = document.querySelector('.v-prato');
    recebentepratoValor.innerHTML = enviantepratoValor.innerHTML;
    let v1 = Number(recebentepratoValor.innerHTML.replace('R$','').replace(',','.'));

    let enviantebebidaValor = document.querySelector('.c2-bebidas .selecionado h6');
    let recebentebebidaValor = document.querySelector('.v-bebida');
    recebentebebidaValor.innerHTML = enviantebebidaValor.innerHTML;
    let v2 = Number(recebentebebidaValor.innerHTML.replace('R$','').replace(',','.'));

    let enviantesobremesaValor = document.querySelector('.c2-sobremesa .selecionado h6');
    let recebentesobremesaValor = document.querySelector('.v-sobremesa');
    recebentesobremesaValor.innerHTML = enviantesobremesaValor.innerHTML;
    let v3 = Number(recebentesobremesaValor.innerHTML.replace('R$','').replace(',','.'));

    let soma = v1 + v2 + v3;
    let floatsoma = parseFloat(soma).toFixed(2);
    let mostrafloatsoma = floatsoma.replace('.',',');

    //AQUI EU VOU PEGAR OS NOMES DOS PRATOS

    let envPratoNome = document.querySelector('.c2-pratos .selecionado h4');
    console.log(envPratoNome);
    let envBebidaNome = document.querySelector('.c2-bebidas .selecionado h4');
    console.log(envBebidaNome);
    let envSobremesaNome = document.querySelector('.c2-sobremesa .selecionado h4');
    console.log(envSobremesaNome);

    const WhatsTxt = 
        `Olá, gostaria de fazer o pedido:%0A` +
        `- Prato: ${envPratoNome}%0A` +
        `- Bebida: ${envBebidaNome}%0A` +
        `- Sobremesa: ${envSobremesaNome}%0A` +
        `Total: R$ ${mostrafloatsoma}%0A%0A`; +
    window.open(`https://wa.me/+5586999198044?text=${WhatsTxt}`);
     


    /* MostraOculta(); */
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