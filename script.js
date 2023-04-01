
function select(classe) {
  const verificador = document.querySelector('.c2-pratos .selecionado');
  if (verificador !== null) {
    verificador.classList.remove('selecionado');
  }

  const find = document.querySelector(classe);
  find.classList.add('selecionado');  
}


function selectBebida(classe){
    const verificador = document.querySelector('.c2-bebidas .selecionado');
    if (verificador !== null){
        verificador.classList.remove('selecionado');
    }

    const find = document.querySelector(classe);
    find.classList.add('selecionado');
}
function selectSobremesa(classe){
    const verificador = document.querySelector('.c2-sobremesa .selecionado');
    if (verificador !== null){
        verificador.classList.remove('selecionado');
    }

    const find = document.querySelector(classe);
    find.classList.add('selecionado');
}