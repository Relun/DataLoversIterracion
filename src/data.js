/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const filterData = (data, condition) => {
  let filter = data.filter(element => {
    return element.type.includes(condition)=== true;
  })
  return filter;
}

/*const computeStats = (data) => {
  let percentage = data.compute(element => {
    return element.type.includes(condition)=== true;

  }) 
  return percentage;
}*/

window.filterData = filterData; 