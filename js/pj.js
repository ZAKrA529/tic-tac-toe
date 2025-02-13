const characters = [
    'https://i.pinimg.com/736x/06/be/81/06be81daf1c6538bb820ca58683858cc.jpg', 'https://i.pinimg.com/736x/ac/1c/0f/ac1c0f1e8bde40903a9355c00ca90a5b.jpg', 'https://i.pinimg.com/736x/18/97/d6/1897d6554db9930fb553659b3439f533.jpg',
    'https://i.pinimg.com/736x/fb/76/61/fb7661e77ca056770b7dec9e55faf71f.jpg', 'https://i.pinimg.com/736x/03/82/ce/0382ce1999aefe28ed15280b6379ef26.jpg', 'https://i.pinimg.com/736x/41/08/26/41082692413efbb0df99ed63bca746ae.jpg',
    'https://i.pinimg.com/736x/04/87/4e/04874eee24fcfb0ec0adf3ecf11b0e01.jpg', 'https://i.pinimg.com/736x/0f/e6/f7/0fe6f709b4f3084fdb7db407d79bc278.jpg', 'https://i.pinimg.com/736x/0a/b6/20/0ab6203cdc5432c77bd4112e104b7097.jpg'
];
const grid = document.getElementById('characterGrid');
const preview = document.getElementById('preview');
let selectedCharacter = localStorage.getItem('selectedCharacter') || '';

// 🔹 1️⃣ Cargar el personaje guardado al inicio
if (selectedCharacter) {
    preview.style.backgroundImage = `url(${selectedCharacter})`;
}

// 🔹 2️⃣ Crear los personajes en la cuadrícula
characters.forEach((char) => {
    const div = document.createElement('div');
    div.classList.add('character');
    div.style.backgroundImage = `url(${char})`;

    // Si el personaje es el que estaba guardado, marcarlo como seleccionado
    if (char === selectedCharacter) {
        div.classList.add('selected');
    }

    div.addEventListener('click', () => {
        document.querySelectorAll('.character').forEach(el => el.classList.remove('selected'));
        div.classList.add('selected');
        preview.style.backgroundImage = `url(${char})`;
        selectedCharacter = char;
    });

    grid.appendChild(div);
});

// 🔹 3️⃣ Guardar en localStorage cuando se confirma la selección
document.getElementById('confirm').addEventListener('click', () => {
    if (selectedCharacter) {
        localStorage.setItem('selectedCharacter', selectedCharacter);
        alert(`Personaje seleccionado guardado: ${selectedCharacter}`);
    } else {
        alert('Por favor, selecciona un personaje.');
    }
});