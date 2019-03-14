/* Manejo del DOM */

const data = window.POKEMON.pokemon;
const container = document.getElementById('root');

const showData = (data) => {
  // nombre y foto
  data.forEach(element => {
    // data[i]
    container.innerHTML += `<img class="image" src="${element.img}" alt="${element.name}">
    <p>${element.name}</p>
    <p>${element.num}</p>
    <p>${element.type}</p>`
  })
}

document.getElementById('pokefilter').addEventListener('change', () => {
  let condition = document.getElementById('pokefilter').value;
  let result = window.filterData(data, condition);

  container.innerHTML = '';
  result.forEach(element => {
    container.innerHTML += `<img class="image" src="${element.img}" alt="${element.name}">
    <p>${element.name}</p>
    <p>${element.num}</p>
    <p>${element.type}</p>`
  })


let estadistica = result.length;
let resultEst = window.computeStats(estadistica);

console.log(resultEst)

});
window.onload = showData(data);