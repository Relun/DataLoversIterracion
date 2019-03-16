/* Manejo del DOM */

const data = window.POKEMON.pokemon;
const container = document.getElementById('root');

const showData = (data) => {
  // nombre y foto
  data.forEach(element => {
    // data[i]
    container.innerHTML += `
    <div>
    <div class="card">
          <div class="box">
          <img src="${element.img}" alt="${element.name}">
          <div class="img">
                  <h3>${element.name}</h3>
                  <p>Número: ${element.num}</p>
                  <p>Tipo:${element.type}</p>
    </div>				 
    </div>
    </div>
    </div>` 
  })
}

document.getElementById('pokefilter').addEventListener('change', () => {
  let condition = document.getElementById('pokefilter').value;
  let result = window.filterData(data, condition);

  container.innerHTML = '';
  result.forEach(element => {
    container.innerHTML += `
    <div>
    <div class="card">
          <div class="box">
          <img src="${element.img}" alt="${element.name}">
          <div class="img">
                  <h3>${element.name}</h3>
                  <p>Número: ${element.num}</p>
                  <p>Tipo:${element.type}</p>
    </div>				 
    </div>
    </div>
    </div>` 

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