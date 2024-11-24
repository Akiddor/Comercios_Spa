const comercios = [
    {
        nombre: "Librería El Búho",
        descripcion: "Librería especializada en literatura y arte",
        direccion: "Calle de los Libros, 123",
        horario: "Lun-Sáb: 10:00-20:00",
        telefono: "+34 912 345 678",
        imagenUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        nombre: "Café La Tertulia",
        descripcion: "Cafetería y espacio cultural",
        direccion: "Plaza Mayor, 45",
        horario: "Lun-Dom: 08:00-23:00",
        telefono: "+34 913 456 789",
        imagenUrl: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        nombre: "Tienda de Antigüedades El Baúl",
        descripcion: "Objetos únicos y con historia",
        direccion: "Avenida del Tiempo, 78",
        horario: "Mar-Sáb: 11:00-19:00",
        telefono: "+34 914 567 890",
        imagenUrl: "https://images.unsplash.com/photo-1631172784770-1ce5d7d2d0d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
];

function createComercioCard(comercio) {
    const card = document.createElement('div');
    card.className = 'comercio-card';

    const image = document.createElement('img');
    image.src = comercio.imagenUrl;
    image.alt = `Imagen de ${comercio.nombre}`;
    image.className = 'comercio-image';

    const info = document.createElement('div');
    info.className = 'comercio-info';

    const name = document.createElement('h2');
    name.className = 'comercio-name';
    name.textContent = comercio.nombre;

    const description = document.createElement('p');
    description.className = 'comercio-description';
    description.textContent = comercio.descripcion;

    const address = document.createElement('p');
    address.textContent = `Dirección: ${comercio.direccion}`;

    const details = document.createElement('div');
    details.className = 'comercio-details hidden';

    const schedule = document.createElement('p');
    schedule.textContent = `Horario: ${comercio.horario}`;

    const phone = document.createElement('p');
    phone.textContent = `Teléfono: ${comercio.telefono}`;

    const toggleButton = document.createElement('button');
    toggleButton.className = 'toggle-info';
    toggleButton.textContent = 'Más información';

    toggleButton.addEventListener('click', () => {
        details.classList.toggle('hidden');
        toggleButton.textContent = details.classList.contains('hidden') ? 'Más información' : 'Menos información';
    });

    details.appendChild(schedule);
    details.appendChild(phone);

    info.appendChild(name);
    info.appendChild(description);
    info.appendChild(address);
    info.appendChild(details);
    info.appendChild(toggleButton);

    card.appendChild(image);
    card.appendChild(info);

    return card;
}

function renderComercios() {
    console.log('Renderizando comercios...'); // Añade esta línea
    const container = document.getElementById('comercios-container');
    comercios.forEach(comercio => {
        const card = createComercioCard(comercio);
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderComercios);

