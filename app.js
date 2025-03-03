// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declara una variable de tipo array para almacenar los nombres de los amigos
const participantes = [];

// Función para mostrar el mensaje de bienvenida como alerta
function mostrarAlertaBienvenida() {
    alert('¡Bienvenido al juego de "Amigo Secreto"! 🎉\n\nPara comenzar, simplemente escribe el nombre de tus amigos en el campo de texto y haz clic en "Añadir". ¡Así podrás crear la lista de participantes para el sorteo!');
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputNombre = document.querySelector('#amigo');
    const listaAmigos = document.querySelector('#listaAmigos');
    const nombre = inputNombre.value.trim(); // Obtén el valor del campo de texto y quita los espacios

    if (nombre && !participantes.includes(nombre)) { // Verificar que el nombre no esté vacío ni duplicado
        participantes.push(nombre); // Agrega el nombre a la lista de participantes
        actualizarLista(listaAmigos); // Actualiza la lista en el DOM
        inputNombre.value = ''; // Limpia el campo de texto
    } else {
        alert('Este nombre ya se encuentra en la lista, por favor ingresa información extra como un apellido.');
    }
}

// Función para actualizar la lista de participantes en el DOM
function actualizarLista(lista) {
    lista.innerHTML = ''; // Limpia la lista existente
    participantes.forEach(participante => {
        const li = document.createElement('li'); // Crea un nuevo elemento de lista
        li.textContent = participante; // Establece el contenido del elemento de lista
        lista.appendChild(li); // Añade el elemento de lista a la lista de participantes
    });
}

// Función para realizar el sorteo aleatorio de un amigo
function sortearAmigo() {
    const resultado = document.querySelector('#resultado');

    if (participantes.length < 2) { // Validar que haya al menos dos amigos disponibles
        resultado.innerHTML = 'Por favor, adiciona al menos dos nombres a la lista.'; // Mostrar un mensaje si la lista tiene menos de dos nombres
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * participantes.length); // Generar un índice aleatorio
    const amigoSecreto = participantes[indiceAleatorio]; // Obtener el nombre sorteado
    resultado.innerHTML = `El amigo secreto es: ${amigoSecreto}`; // Mostrar el resultado
}

// Llamar a la función para mostrar el mensaje de bienvenida al cargar la página
document.addEventListener('DOMContentLoaded', mostrarAlertaBienvenida);