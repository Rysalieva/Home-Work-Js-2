const charactersContainer = document.getElementById('characters-container');

// Получаем данные о персонажах из файла persons.json
fetch('persons.json')
    .then(response => response.json())
    .then(data => {
        // Создаем карточку для каждого персонажа
        data.forEach(person => {
            const card = document.createElement('div');
            card.classList.add('person-card');

            // Добавляем изображение персонажа
            const photo = document.createElement('img');
            photo.src = person.person_photo;
            photo.alt = person.name;
            photo.classList.add('person-photo');
            card.appendChild(photo);

            // Добавляем имя персонажа
            const name = document.createElement('h2');
            name.textContent = person.name;
            card.appendChild(name);

            // Добавляем возраст персонажа
            const age = document.createElement('p');
            age.textContent = `Age: ${person.age}`;
            card.appendChild(age);

            // Добавляем карточку персонажа в контейнер
            charactersContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching characters:', error));