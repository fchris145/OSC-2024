var img = document.createElement("img");
var img2 = document.createElement("img");
const nomResto = document.querySelectorAll('.nomR');
const descritCuisine = document.querySelectorAll('.descriptR');
const images = document.querySelectorAll('.img');
const xhr = new XMLHttpRequest();
const url = 'https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/restaurants-casvp/records?limit=20';
xhr.open('GET', url, true);
img.src = "images/img1.jpg";
img2.src = "images/img2.jpg"
const restaurants = [
    {
        nom: "Restaurant Le Famous",
        typeCuisine: "Cuisine Francaise",
        image : "images/img1.jpg"
    },
    {
        nom: "Restaurant Le ninja cuisinier",
        typeCuisine: "Cuisine Chinoise",
        image: "images/img2.jpg"
    },
    {
        nom: "Restaurant Les freres",
        typeCuisine: "Cuisine Africaine",
        image: "images/img3.jpg"
    },
    {
        nom: "Restaurant Mon genie",
        typeCuisine: "Cuisine Thailandaise",
        image: "images/img4.jpg"
    }
]

for (let i = 0; i < restaurants.length; i++) {
    nomResto[i].innerText = restaurants[i].nom;
    descritCuisine[i].innerText = restaurants[i].typeCuisine;
    images[i].src = restaurants[i].image;
    
}
// var div = document.getElementById("x");
// console.log(div.appendChild(img));

// var div2 = document.getElementById("y");
// console.log(div2.appendChild(img2));

xhr.onload = function () {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
    } else {
        console.error('Erreur lors de la récupération des données.');
    }
};

xhr.send();