// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//array que almacenará la lista de nombres ingresados.
let listaDeNombres = [];

//Crear array que vaya almacenando los nombres ingresados.
function agregarAmigo() {
  let nombreIngresado = document.getElementById("amigo").value;

//Si no se ingresa ningun nombre, generar un mensaje de error.
  if (nombreIngresado.trim() === "") {
    alert("Por favor, inserte un nombre válido");

//De lo contrario se agrega a la lista.    
  } else {
    listaDeNombres.push(nombreIngresado);
    document.querySelector("#amigo").value = "";
    mostrarLista();
  }
}


//Se muestra la lista de amigos que van ingresando 
function mostrarLista() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let inicioLista = 0; inicioLista < listaDeNombres.length; inicioLista++) {
    const elementoDeLista = listaDeNombres[inicioLista];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = elementoDeLista;
    listaAmigos.appendChild(listaHTML);
  }
}

//Se sortea el amigo de forma aleatorea y se muestra
function sortearAmigo() {
  if (listaDeNombres.length === 0) {
    alert("No hay nombres en la lista, por favor ingrese uno válido");
  } else {
    let amigoSeleccionado = Math.floor(Math.random() * listaDeNombres.length);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = 'El amigo secreto sorteado es: ' +listaDeNombres[amigoSeleccionado];
  }
}

