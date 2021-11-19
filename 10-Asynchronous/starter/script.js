'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

//First AJAX call
//old method

const renderCountry = function(data){
    const html = `
    <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(Number(data.population) / 1000000).toFixed(2)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
 
    `;
    countriesContainer.insertAdjacentHTML('beforeend' , html);
    countriesContainer.style.opacity = 1;
}
/*
const getCuountryData = function(country){

console.log(country);
const request = new XMLHttpRequest();
request.open('GET' , `https://restcountries.eu/rest/v2/name/${country}`);
request.send();

request.addEventListener('load' , function(){
    console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);
    //get neighbour country
    const [neighbour] = data.borders;
    if(!neighbour) return;
//     const request = new XMLHttpRequest();
// request.open('GET' , `https://restcountries.eu/rest/v2/alpha/{code}/${country}`);
// request.send();
   
});

};

getCuountryData('portugal');
getCuountryData('usa');
*/
//Promises and Fetch datas
//MODERN WAY OF USING AJAX
//PROMISES
//example -> lottery ticket(promise) right now
//promis that i will receive money if i guess correct outcome

//

const request = fetch('https://restcountries.eu/rest/v2/name/portugal'); //GET

console.log(request);

const getCountryData = function(country){
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]))
    .catch(err => {throw new Error('Country no found')});//catch any of the error
};
getCountryData('portugal');

//Throwing errors manually




