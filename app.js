// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/* 
ONE G9 - Alura Latam
Elaborado por: Omar Hernández Bravo - omar.hb.edu(AT)gmail.com
*/

// Se declara el arreglo para alojar los nombres de los amigos que participan del sorteo
let amigos = [];

//Se declara función agregarAmigo para agregar nombres al array
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let listaAmigos = document.getElementById('listaAmigos');
    let nombre = input.value.trim();

// Se verifica que no se ingrese un nombre vacío
    if (!nombre) {
        alert("Nombre vacío. Ingresa un nombre para agregarlo a la lista");
        input.focus();
        return;
    }

// Se valida número máximo de nombres
    if (amigos.length >= 5) {
        alert(`No se pueden agregar más amigos. Máximo ${amigos.length}.`);
        input.value = '';
        input.focus();
        return;
    }

    amigos.push(nombre);
    const lista = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);
    input.value = '';
    input.focus();
}
