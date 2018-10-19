
const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

var cont = 0;
var bitacoras = [];
var formulario = document.getElementById("bitacora");
//¿Qué contienen la variable formulario ?
//el formulario tiene una etiqueta form un fieldset 3 div y un input dentro de cada div hay label and input

formulario.addEventListener("Submit", (evt)=>{});

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault(); 
 });
 //¿Qué hace el método evt.preventDefault() ?
 //preventDefault cancela el evento temporalmente sin envargo podemos volver a llamarlo

 formulario.addEventListener("submit", (evt) => {
    evt.preventDefault(); 
    let bitacora = { 
    cant:cont, 
    fecha: formulario[1].value, 
    descripcion: formulario[2].value, 
    cantidad: formulario[3].value 
  } 
 }); 
 // ¿Qué es lo que contiene formulario[x]?
//formulario en la posicion 1 contienen el valor de la feha
//formulario en la posicion 2 contiene lo que el usuario describa en el textArea
//formulario en la posicion 3 contiene la cantidad


formulario.addEventListener("submit", (evt) => {
    evt.preventDefault(); 
    let bitacora = { 
    cant:cont, 
    fecha: formulario[1].value, 
    descripcion: formulario[2].value, 
    cantidad: formulario[3].value 
  } 
    bitacoras.push(bitacora);
    cont++;
    mostrar();
 }); 


 const crearElemento = (bitacora, tbody) =>{ 
    let tr = document.createElement("tr"); 
    Object.values(bitacora).forEach(item => { 
     let td = document.createElement("td"); 
     let content = document.createTextNode(item); 
     td.appendChild(content); 
     tr.setAttribute("class", "click"); 
     tr.appendChild(td); 
    }); 
   tbody.appendChild(tr); 
  } 

//¿Qué contienen las variables tr y td ?
//el contendido de las variables tr y td seran los valores que tiene bitacora

//¿Qué contienen la variable content ?
// content tiene todos los nodos hijos a agregar a los nodos padres td y tr

//¿Qué valor tendra tbody al finalizar la iteración?
//al finalizar la iteracion tbody contiene todos los td y tr ya con informacion correspondiente

//Describa en pocas palabras lo que realizara esta función
// la funcion crea una tabla de toda la informacion que contiene bitacora.





const eliminar= (tbody)=>{
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}
   
//¿Qué es lo que hace .firstChild?
//firstChild contiene  el primer nodo hijo como un ELEMENTO nodo


//Después de realizar el while ¿Comó quedara el elemento tbody ?
//tbody queda vacio.
const agregar= ()=>{ 
    var eventtr = document.querySelectorAll(".click"); 
      eventtr.forEach((item, index) => { 
      item.addEventListener("click", () => { 
      document.querySelector("#fecha").value = item.childNodes[1].textContent; 
      document.querySelector("#descp").value = item.childNodes[2].textContent; 
      document.querySelector("#cant").value = item.childNodes[3].textContent; 
     }); 
    }) 
   } 
//¿Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent;
//En item.childNodes[1] obtenemos la fecha escrita
//En item.childNodes[2] obtenemos la descripcion escrita
//En item.childNodes[3] obtenemos la cantidad de horas escritas

const mostrar = ()=>{ 
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) { 
     eliminar(document.querySelector(".tabla-btc tbody")); 
    } 
    bitacoras.forEach(item => { 
     crearElemento(item, document.querySelector(".tabla-btc tbody")); 
    }); 
    agregar(); 
} 
   
  
//¿Qué es lo que obtenemos cuando se realiza document.querySelector(".tabla-btc tbody") ?
//Obtiene los elementos los tbody anteriormente creados.

 //¿Qué hace el método childElementCount?
//Cuenta la cantidad de elementos de hijos que tiene.

//¿Qué se mostrara en pantalla cuando se ejecute la función agregar()?
//Solo se guardan los valores que tiene la bitacora en el tbody pero no se muestra nada en pantalla

//¿Qué se mostrara en el navegador despues de ejecutar la función mostrar?
//Se mostraran en la tabla los valores que estan en bitacora

var validarformulario = (formulario) =>{

    
}