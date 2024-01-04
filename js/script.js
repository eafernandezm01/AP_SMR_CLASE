window.addEventListener ('load', inicializar);

function ocultaResultado ({target}=e){
    if (target.tagName !== 'DIV'){
        target = target.parentElement;
    }
    target.setAttribute ('class','resultado-hidden');
}

function muestraResultado({target}=e){
   const parentElement=target.parentElement;
   const resultado=parentElement.querySelector ('.resultado-hidden');
   resultado.setAttribute ('class','resultado-show');
   resultado.addEventListener ('click', ocultaResultado);
}

function inicializar (){
    const nodeList = document.querySelectorAll('.ejemplo>code');
    nodeList.forEach(node => {
        node.addEventListener ('click', muestraResultado);
    });
}