const urll = "http://localhost:3000/cars/"; //this urll has a forward slash

const container = document.querySelector('.details'); 

//create a accessor to the url with query(?) param by: ...{a new url search parameter object}
const id = new URLSearchParams(window.location.search).get('id');

async function renderTheCarsDetail(){
    const response = await fetch(urll + id);
    const carData = await response.json();
    
    let template = `
        <h2>${carData.model}</h2>
        <p><small>${carData.saves}</small></p>
        <p>${carData.features}</p>
    `;

  
    container.innerHTML = template;  
}


window.addEventListener('DOMContentLoaded',()=>renderTheCarsDetail());