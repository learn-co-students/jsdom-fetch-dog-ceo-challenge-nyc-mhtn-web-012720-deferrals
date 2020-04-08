

document.addEventListener('DOMContentLoaded', function () {
  loadImages();
  loadBreedOptions();
});

function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(function(response){
       return response.json()
    })
    .then(function(results){
      results.message.forEach(function(image){
          addImage(image)})
    });
}

function addImage(dogPicUrl) {
  let container = document.getElementById('dog-image-container');
  let newImageEl = document.createElement('img');
  newImageEl.src = dogPicUrl;
  container.appendChild(newImageEl);
}

function loadBreedOptions() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
    .then(function(response){
        return response.json()
    })

    .then(function(results){

      breeds = Object.keys(results.message);
      updateBreedList(breeds);
      addBreedSelectListener();
    });
}

function updateBreedList(breeds) {
  let ul = document.getElementById('dog-breeds');
  removeChildren(ul);
  breeds.forEach(function(breed){
      addBreed(breed)});
}

function removeChildren(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}

// function selectBreedsStartingWith(letter) {
//   updateBreedList(breeds.filter(function(breed){
//       breed.startsWith(letter)
//   }))   
// }

function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  }

function addBreedSelectListener() {
  let breedDropdown = document.querySelector('#breed-dropdown');
  breedDropdown.addEventListener('change', function (event) {
    selectBreedsStartingWith(event.target.value);
  });
}

function addBreed(breed) {
  let ul = document.querySelector('#dog-breeds');
  let li = document.createElement('li');
  li.innerText = breed;
  li.style.cursor = 'pointer';
  li.style.color = 'black'
  ul.appendChild(li);
  li.addEventListener('click', function(e){
    let color = li.style.color
    if(color === 'black'){
        e.target.style.color = 'red'
    }
    if(color === 'red'){
        e.target.style.color = 'black'
    }
  });
}

// function updateColor(event) {
//   event.target.style.color = 'palevioletred';
// }



//let breeds =[]
// document.addEventListener('DOMContentLoaded', function () {
// 	randomImages();
// 	breedList();
// });

// function randomImages() {
// 	const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
// 	return fetch(imgUrl)
// 		.then(function (response) {
// 			return response.json();
// 		})
// 		.then(function (results) {
// 			results.message.forEach(function (image) {
// 				imgElement(image);
// 			});
// 		});
// }

// function imgElement(image) {
// 	let container = document.querySelector('#dog-image-container');
// 	let img = document.createElement('img');
// 	img.src = image;
// 	container.appendChild(img);
// }
// //------------------------------------------------------------------

// function breedList() {
// 	const breedUrl = 'https://dog.ceo/api/breeds/list/all';
// 	return fetch(breedUrl)
// 		.then(function (response) {
// 			return response.json();
// 		})
// 		.then(function (results) {
// 			let breeds = Object.keys(results.message);
// 			updateBreedList(breeds);
// 		});
// }
// function updateBreedList(breeds) {
// 	let ul = document.getElementById('dog-breeds');
// 	removeChildren(ul);
// 	breeds.forEach(function (breed) {
// 		addBreed(breed);
// 	});
// }

// function removeChildren(element) {
// 	let child = element.lastElementChild;
// 	while (child) {
// 		element.removeChild(child);
// 		child = element.lastElementChild;
// 	}
// }


// function selectBreedsStartingWith(letter) {
//     updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
//   }
  
//   function addBreedSelectListener() {
//     let breedDropdown = document.querySelector('#breed-dropdown');
//     breedDropdown.addEventListener('change', function (event) {
//       selectBreedsStartingWith(event.target.value);
//     });
//   }



// function addBreed(breed) {
// 	let ulTag = document.getElementById('dog-breeds');
// 	let liTags = document.createElement('li');
// 	liTags.innerText = breed;
// 	ulTag.appendChild(liTags);
// 	liTags.style.cursor = 'pointer';
// 	liTags.style.color = 'black';
// 	liTags.addEventListener('click', function (e) {
// 		let color = liTags.style.color;
// 		if (color === 'black') {
// 			e.target.style.color = 'red';
// 		}
// 		if (color === 'red') {
// 			e.target.style.color = 'black';
// 		}
//     });
  

// }



























// function selectBreed(letter){
//     updateBreedList(breeds.filter(function(breed){
//         breed.startsWith(letter)
//     }))
// }


// function breedDropdown(){
//     let dropDown = document.getElementById('breed-dropdown')
//     dropDown.addEventListener('change', function(e){
//       selectBreed(event.target.value)  
//     })
    
//   }