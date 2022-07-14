"use strict";

//Preguntas Frecuentes

const FAQs = document.querySelectorAll(".pregunta1, .pregunta2, .pregunta3, .pregunta4");
const respuestas = document.querySelectorAll(".respuesta1, .respuesta2, .respuesta3, .respuesta4");

FAQs[0].addEventListener("click", e=>{
    for (let index = 0; index < FAQs.length; index++) {
        if(index == 0){
            if(respuestas[0].classList.contains("invisible")){
                respuestas[0].classList.remove("invisible");
                setTimeout(() => {
                    respuestas[0].style.opacity = "100%";
                }, 1);
            }
            continue;
        }
        if(!respuestas[index].classList.contains("invisible")){
            respuestas[index].style.opacity = "0";
            respuestas[index].classList.add("invisible");
        }
    }
})

FAQs[1].addEventListener("click", e=>{
    for (let index = 0; index < FAQs.length; index++) {
        if(index == 1){
            if(respuestas[1].classList.contains("invisible")){
                respuestas[1].classList.remove("invisible");
                setTimeout(() => {
                    respuestas[1].style.opacity = "100%";
                }, 1);
            }
            continue;
        }
        if(!respuestas[index].classList.contains("invisible")){
            respuestas[index].style.opacity = "0";
            respuestas[index].classList.add("invisible");
        }
    }
})

FAQs[2].addEventListener("click", e=>{
    for (let index = 0; index < FAQs.length; index++) {
        if(index == 2){
            if(respuestas[2].classList.contains("invisible")){
                respuestas[2].classList.remove("invisible");
                setTimeout(() => {
                    respuestas[2].style.opacity = "100%";
                }, 1);
            }
            continue;
        }
        if(!respuestas[index].classList.contains("invisible")){
            respuestas[index].style.opacity = "0";
            respuestas[index].classList.add("invisible");
        }
    }
})

FAQs[3].addEventListener("click", e=>{
    for (let index = 0; index < FAQs.length; index++) {
        if(index == 3){
            if(respuestas[3].classList.contains("invisible")){
                respuestas[3].classList.remove("invisible");
                setTimeout(() => {
                    respuestas[3].style.opacity = "100%";
                }, 1);
            }
            continue;
        }
        if(!respuestas[index].classList.contains("invisible")){
            respuestas[index].style.opacity = "0";
            respuestas[index].classList.add("invisible");
        }
    }
})



//Testimonios

let contador = 1;
const testimonios = [{
    nombre: "Mathias Francia",
    comentario: "Muchas gracias por la paciencia y dedicación genios! Abrazo grande!",
    
},{
    nombre: "Matias Andrade",
    comentario: "Excelentes profesionales. Gracias a Adriana y Alfredo por su paciencia y dedicación. No tengo ni un detalle negativo que comentar. Alfredo realmente me preparó para salvar de una, un genio. Adriana excelente toda la gestión que me hizo. Me hicieron todos los trámites, todo en tiempo y forma. Felicitaciones a ellos y gracias.",
    
},{
    nombre: "Toyacass",
    comentario: "Feliz Feliz !! Muchas gracias a ustedes por el apoyo y la paciencia !!Super recomendados!! Unos genios Adriana y Alfredo !!",
   
},{
    nombre: "Vane Laens",
    comentario: "adriana una genia total!!! te da confianza al manejar,tiene mucha paciencia se nota que realmente le gusta lo que hace!!!",
   
}
]

function escribirTestimonio(){
    document.querySelector(".comentario-nombre").textContent = testimonios[contador-1].nombre;
    document.querySelector(".comentario-texto").textContent = testimonios[contador-1].comentario;
  
}

escribirTestimonio();


document.querySelector(".derecha img").addEventListener("click", ()=>{
    if (contador<testimonios.length){contador++;}
    else{contador = 1;}
    escribirTestimonio();
})

document.querySelector(".izquierda img").addEventListener("click", ()=>{
    if (contador>1){contador--;}
    else{contador = testimonios.length;}
    escribirTestimonio();
})

