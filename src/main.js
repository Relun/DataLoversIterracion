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
    container.innerHTML += `
    <div class="card" style="width: 10rem;">
      <img src="${element.img}" class="card-img-top" alt="${element.name}">
      <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">${element.num}</p>
      <p class="card-text">${element.type}</p>
      </div>
</div>
    
    `

   /*<div class="card" style="width: 18rem;">
      <img src="${element.img}" class="card-img-top" alt="${element.name}">
      <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">${element.num}</p>
      <p class="card-text">${element.type}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
</div>*/
  })


let estadistica = result.length;
let resultEst = window.computeStats(estadistica);

console.log(resultEst.toFixed(2))
/*console.log(estadistica)*/
});
window.onload = showData(data);

/* const computeStats = (estadistica) => {
  let percentage = (estadistica*100)/151;
  let intPercentage = Math.round(percentage);

  return percentage; */