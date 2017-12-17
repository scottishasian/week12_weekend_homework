let countries = [];

const app = function(){

  const url = 'https://restcountries.eu/rest/v2/all';
  const onSelect = document.querySelector('#select');
  makeRequest(url, requestCompleteDropdown)
  onSelect.addEventListener('change', function(){

    const ul = document.querySelector('#country-list');
    const p = document.querySelector('#country-info');
    ul.innerHTML = "";
    p.innerHTML = "";
    const li = document.createElement("li");
    const para = document.createElement("p");
    const para2 = document.createElement("p");
    li.innerText = "Name: " + countries[this.value].name
    para.innerText = "Population: " + countries[this.value].population
    para2.innerText = "Sub-Region: " + countries[this.value].subregion
    ul.appendChild(li);
    p.appendChild(para);
    p.appendChild(para2);


  });

}

const makeRequest = function(url, callback) {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.send();
  request.addEventListener('load', callback);
}

const requestCompleteDropdown = function() {
  if (this.status !== 200) return;
  const jsonString = this.responseText;
  countries = JSON.parse(jsonString);
  handlSelectChange(countries);


}

const handlSelectChange = function(countries) {
  const select = document.querySelector("#select")
  countries.forEach(function(country, index) {
    let option = document.createElement("option")
    option.innerText = country.name;
    option.value = index;
    select.appendChild(option);

  }.bind(this));

// const populateList = function(countries) {
//   const ul = document.querySelector('#country-list');
//   const p = document.createElement('#country-info');
//   ul.innerHTML = "";
//   p.innerHTML = "";
//   const li = document.createElement("li");
//   const img = document.createElement("img");
//   const para = document.createElement("p");
//   const para2 = document.createElement("p");
//   li.innerText = "Name:" + countries[this.value].name
//   para.innerText = "Population: " + countries[this.value].population
//   para2.innerText = "Sub-Region: " + countries[this.value].subregion
//   ul.appendChild(li);
//   p.appendChild(para);
//   p.appendChild(para2);
//   }

}

document.addEventListener('DOMContentLoaded', app);
