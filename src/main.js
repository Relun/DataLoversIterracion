/* Manejo del DOM */

const data = window.POKEMON.pokemon;
const container = document.getElementById('root');

const showData = (data) => {
  // nombre y foto
  data.forEach(element => {
    // data[i]
    container.innerHTML += `<p>${element.name}</p>
                            <img class="image" src="${element.image}" alt="${element.name}">`
  })
}

document.getElementById('pokefilter').addEventListener('change', () => {
  let condition = document.getElementById('pokefilter').value;
  let result = window.filterData(data, condition);

  container.innerHTML = '';
  result.forEach(element => {
    container.innerHTML += `<p>${element.name}</p>
    <img class="image" src="${element.image}" alt="${element.name}">`
  })
});



window.onload = showData(data);