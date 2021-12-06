//fetching data from the db.json

const url = "http://localhost:3000/cars";
const container = document.querySelector('.blogs'); //gets the div class of index.html to inject blog


async function renderTheCars(){ //async f(x) 

    const response = await fetch(url); //a promise
    const carsData = await response.json(); //a promise too
    console.log(carsData);

    let template = '';

    carsData.forEach(carData => {
        template+=`
            <div class="post">
                <h2>${carData.model}</h2>
                <p><small>${carData.saves}</small></p>
                <p>${carData.features.slice(0,100)}</p>
                <a href="./detailCar.html?id=${carData.id}">More on this...</a>
            </div>
        `
    });

    container.innerHTML = template;


}

 
window.addEventListener('DOMContentLoaded',()=>renderTheCars());