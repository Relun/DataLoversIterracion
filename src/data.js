/* Manejo de data */
// puedes ver como agregamos la función a nuestro objeto global window

const filterData = (data, condition) => {
  let filter = data.filter(element => {
    return element.type.includes(condition)=== true;
  })
  return filter;
}
 

const computeStats = (estadistica) => {
  let percentage = (estadistica*100)/151;
 
  return percentage;
}

window.filterData = filterData; 
window.computeStats = computeStats;

