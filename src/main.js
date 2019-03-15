/* Manejo del DOM */

const data = window.POKEMON.pokemon;
const container = document.getElementById('root');

const showData = (data) => {
  // nombre y foto
  data.forEach(element => {
    // data[i]
    container.innerHTML += `<div class="card" style="width: 12rem;">
    <img src="${element.img}" class="card-img-top" alt="${element.name}">
    <div class="card-body">
    <h5 class="card-title">Nombre: ${element.name}</h5>
    <p class="card-text">Número: ${element.num}</p>
    <p class="card-text">Tipo: ${element.type}</p>
    </div>
</div> `
  })
}

document.getElementById('pokefilter').addEventListener('change', () => {
  let condition = document.getElementById('pokefilter').value;
  let result = window.filterData(data, condition);

  container.innerHTML = '';
  result.forEach(element => {
    container.innerHTML += `
    <div class="card" style="width: 12rem;">
      <img src="${element.img}" class="card-img-top" alt="${element.name}">
      <div class="card-body">
      <h5 class="card-title">Nombre: ${element.name}</h5>
      <p class="card-text">Número: ${element.num}</p>
      <p class="card-text">Tipo: ${element.type}</p>
      </div>
</div> `

  });

let estadistica = result.length;
let resultEst = window.computeStats(estadistica);

let result2 = document.getElementById('estadistic');
 result2.innerHTML = `<p class="card-text">${resultEst.toFixed(2)}% del total de Pokémones son de este tipo</p>
 <p class="card-text">${estadistica} Pokémones son de este tipo</p>`

//console.log(resultEst.toFixed(2))
//console.log(estadistica)
})
window.onload = showData(data);