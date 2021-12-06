//fetching data from the db.json

let url = "http://localhost:3000/cars?_sort=saves&_order=desc"; //to get it in another order http://localhost:3000/cars?_sort=saves&_order=desc
const container = document.querySelector('.blogs'); //gets the div class of index.html to inject blog
const formSearch = document.querySelector('.search'); //gets the div class of index.html to search blog

async function renderTheCars(term){ //async f(x) //passing a term as input to f(x) if searched.....
    if (term){
        url += `&q=${term}`; //the url should be a var not const for it to work
    }

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

formSearch.addEventListener('submit',(e)=>{
    e.preventDefault();
    renderTheCars(formSearch.term.value.trim()); //.trim() removes whitespace
})

//create a search query for the posts of cars
