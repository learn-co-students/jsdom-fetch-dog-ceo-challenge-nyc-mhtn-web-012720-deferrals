document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    const imgContainer = document.getElementById('dog-image-container');
    const ul = document.getElementById('dog-breeds');
    const dropDown = document.getElementById('breed-dropdown');

    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => addImg(json));

    fetch(breedUrl)
        .then(res => res.json())
        .then(json => {
            loadBreedOptions(json);
            filterBreeds(json);
        });

    function addImg(json) {
        json.message.forEach(dogImgUrl => {
            const newImgEl = document.createElement('img');
            newImgEl.src = dogImgUrl;
            imgContainer.append(newImgEl);
        });
    };

    function loadBreedOptions(json) {
        for (const breed in json.message) {
            const li = document.createElement('li');
            li.innerHTML = breed;
            li.style.cursor = 'pointer';
            ul.appendChild(li);
        };       
    };

    document.addEventListener('click', (event) => {
        if (event.target.localName === 'li') {
            event.target.style.color = 'green';
        };
    });

    function filterBreeds(json) {
        dropDown.addEventListener('change', (event) => {
            ul.innerHTML = '';
            for (const breed in json.message) {
                if (dropDown.value === breed[0]) {
                    const li = document.createElement('li');
                    li.innerHTML = breed;
                    ul.appendChild(li);
                };
            };
        });
    };
});