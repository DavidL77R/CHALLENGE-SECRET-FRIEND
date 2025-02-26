// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declara una variable de tipo array para almacenar los nombres de los amigos
var participantes = [];

// Espera a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtén las referencias a los elementos del DOM
    var inputNombre = document.getElementById('nombre');
    var btnAdicionar = document.getElementById('adicionar');
    var listaParticipantes = document.getElementById('lista-participantes');
    var btnSortear = document.getElementById('sortear');
    var resultado = document.getElementById('resultado');

    // Función para actualizar la lista de participantes en el DOM
    function actualizarLista() {
        listaParticipantes.innerHTML = ""; // Limpia la lista existente
        for (var i = 0; i < participantes.length; i++) {
            var li = document.createElement('li'); // Crea un nuevo elemento de lista
            li.textContent = participantes[i]; // Establece el contenido del elemento de lista
            listaParticipantes.appendChild(li); // Añade el elemento de lista a la lista de participantes
        }
    }

    // Función para realizar el sorteo aleatorio de un amigo
    function sortearAmigo() {
        if (participantes.length > 0) { // Validar que haya amigos disponibles
            var indiceAleatorio = Math.floor(Math.random() * participantes.length); // Generar un índice aleatorio
            var amigoSecreto = participantes[indiceAleatorio]; // Obtener el nombre sorteado
            resultado.textContent = 'El amigo secreto es: ' + amigoSecreto; // Mostrar el resultado
        } else {
            resultado.textContent = 'Por favor, adiciona nombres a la lista.'; // Mostrar un mensaje si la lista está vacía
        }
    }

    // Agrega un evento de clic al botón "Adicionar"
    btnAdicionar.addEventListener('click', function() {
        var nombre = inputNombre.value.trim(); // Obtén el valor del campo de texto y quita los espacios
        if (nombre) {
            participantes.push(nombre); // Agrega el nombre a la lista de participantes
            actualizarLista(); // Actualiza la lista en el DOM
            inputNombre.value = ''; // Limpia el campo de texto
        }
    });

    // Agrega un evento de clic al botón "Sortear"
    btnSortear.addEventListener('click', sortearAmigo); // Llama a la función sortearAmigo cuando se haga clic
});
