const imageContainer = document.querySelector('#dog-image-container')
const breedContainer = document.querySelector('#dog-breeds')
const breedDropDown = document.querySelector('#breed-dropdown')

window.addEventListener('DOMContentLoaded', () => {
    
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    .then(json => renderImages(json))

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(json => {
        renderBreed(json)
        breedFilter(json)
    });

    const renderImages = (json) => { //return value from fetch is an array
        json.message.forEach(element => {
            const image = document.createElement('img')
            image.src = element
            imageContainer.appendChild(image)
        })
    };

    const renderBreed = (json) => { //return value from fetch is an object
        for (const breed in json.message){
            const breedLi = document.createElement('li')
            breedLi.id = "dog-breed"
            breedLi.innerText = breed
            breedLi.style.cursor = 'pointer'
            breedContainer.appendChild(breedLi)
        }
    };

    const breedFilter = (json) => {
        breedDropDown.addEventListener("change", function(event){
            breedContainer.innerText = ''
            for (const breed in json.message){
                if (breedDropDown.value === breed.charAt(0)) {
                    const breedLi = document.createElement('li')
                    breedLi.id = "dog-breed"
                    breedLi.innerText = breed
                    breedLi.style.cursor = 'pointer'
                    breedContainer.appendChild(breedLi)
                }
            }        
        })
    };
    
    breedContainer.addEventListener('click', function(event){
        if (event.target.id === 'dog-breed'){
            event.target.style.color = '#1cb045'
        }
    });
});