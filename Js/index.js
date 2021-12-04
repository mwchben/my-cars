//fetching data from the db.json

const url = "http://localhost:3000/cars";


async function renderTheCars(){ //async f(x) 

    let response = await fetch(url); //a promise
    let carsData = await response.json(); //a promise too
    console.log(carsData);
}

 
window.addEventListener('DOMContentLoaded',()=>renderTheCars());