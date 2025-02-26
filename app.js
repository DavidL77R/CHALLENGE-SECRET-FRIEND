// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declara una variable de tipo array para almacenar los nombres de los amigos
let participantes = [];

// Espera a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtén las referencias a los elementos del DOM
    let inputNombre = document.getElementById('nombre');
    let btnAdicionar = document.getElementById('adicionar');
    let listaParticipantes = document.getElementById('lista-participantes');
    let btnSortear = document.getElementById('sortear');
    let resultado = document.getElementById('resultado');

    // Función para actualizar la lista de participantes en el DOM
    function actualizarLista() {
        listaParticipantes.innerHTML = ""; // Limpia la lista existente
        for (let i = 0; i < participantes.length; i++) {
            let li = document.createElement('li'); // Crea un nuevo elemento de lista
            li.textContent = participantes[i]; // Establece el contenido del elemento de lista
            listaParticipantes.appendChild(li); // Añade el elemento de lista a la lista de participantes
        }
    }

    // Función para realizar el sorteo aleatorio de un amigo
    function sortearAmigo() {
        if (participantes.length > 0) { // Validar que haya amigos disponibles
            let indiceAleatorio = Math.floor(Math.random() * participantes.length); // Generar un índice aleatorio
            let amigoSecreto = participantes[indiceAleatorio]; // Obtener el nombre sorteado
            resultado.textContent = 'El amigo secreto es: ' + amigoSecreto; // Mostrar el resultado
        } else {
            resultado.textContent = 'Por favor, adiciona nombres a la lista.'; // Mostrar un mensaje si la lista está vacía
        }
    }

    // Agrega un evento de clic al botón "Adicionar"
    btnAdicionar.addEventListener('click', function() {
        let nombre = inputNombre.value.trim(); // Obtén el valor del campo de texto y quita los espacios
        if (nombre) {
            participantes.push(nombre); // Agrega el nombre a la lista de participantes
            actualizarLista(); // Actualiza la lista en el DOM
            inputNombre.value = ''; // Limpia el campo de texto
        }
    });

    // Agrega un evento de clic al botón "Sortear"
    btnSortear.addEventListener('click', sortearAmigo); // Llama a la función sortearAmigo cuando se haga clic
});
