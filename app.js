/*Se puede asignar una funcion a una variable(Dejamos las variables inicializadas en el limbo)*/
let numero_secreto = 0;
intentos = 0;
let lista_numeros_sorteados = [];
console.log(numero_secreto);
let numero_maximo = 10;

function asignar_texto_elemento(elemento,texto){
    /*Elemento es el objeto o etiqueta objetivo de la funcion*/
    let elementoHTML = document.querySelector(elemento);

    /*texto es el string que va a ubicar dentro del objeto o etiqueta objetivo*/
    elementoHTML.innerHTML = texto
    return;
    
}



function verificar_intento() {
    let numero_usuario = parseInt(document.getElementById("valor_usuario").value);

    if(numero_usuario == numero_secreto){
        asignar_texto_elemento('p',`Acertaste en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }

    else{
        //El usuario no acertó
        if(numero_usuario > numero_secreto){
            asignar_texto_elemento('p','El numero secreto es menor');
        }

        else{
            asignar_texto_elemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiar_caja();
    }
   

  

}


function limpiar_caja(){
     document.querySelector('#valor_usuario').value = '';
    
}

function generar_numero_secreto(){
    let numero_generado = Math.floor((Math.random()*numero_maximo)+1);
    console.log(numero_generado);
    console.log(lista_numeros_sorteados);

    //Si ya sorteamos todos los numeros
    if(lista_numeros_sorteados.length == numero_maximo){
        asignar_texto_elemento('p','Ya se sortearon todos los numeros posibles');
    
        
    } 
    
    else{

        //Si el numero generado esta incluido en la lista
        if (lista_numeros_sorteados.includes(numero_generado)){
            return generar_numero_secreto();

        }else {
            lista_numeros_sorteados.push(numero_generado);
            return numero_generado;
        }
    }

}

function condiciones_iniciales(){
    asignar_texto_elemento('h1','Juego del numero secreto');
    asignar_texto_elemento('p',`Un numero del 1 al ${numero_maximo} y adivine`);
    numero_secreto = generar_numero_secreto();
    intentos = 1; 

}
function reiniciar_juego() {
    //limpiar la caja 
    limpiar_caja();
    //Indicar mensaje de intervalo de numero
    //generar el numero aleatorio 
    //inicialiar el numero de intentos
    condiciones_iniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}


condiciones_iniciales();



