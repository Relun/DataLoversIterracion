global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const data = [
  {
    name: "Caterpie",
    type: "Bug",
  },
  {
    name:"Charmander",
    type:"Fire",
  },
  {
    name:"Vulpix",
    type:"Fire", 
  }
]

describe('Funcion filterData', () => { // a quien voy a testear//
  it('debería ser una función', () => { // que voy a testear o probar//
    assert.deepEqual ( typeof filterData, 'function'); //assert: es quien se encarga de evaluar que el test haga lo que tiene que hacer, metodos son una funcion, ejem deepequal, esa funcion la entrega chai, en chai se ven ejemplos//
  });
  it('debería retornar el objeto "Caterpie" para primer pokemon tipo "Bug"', () => {
    assert.deepEqual(window.filterData(data, "Bug"), [{name:"Caterpie", type: "Bug"}]);
  });
})

describe('Funcion computeStats', () => {
  it('debería ser una función', () => {
    assert.deepEqual ( typeof computeStats, 'function');
  });
 
  it('debería retornar "7.947019867549669% de pokemones tipo fuego"', () => {
    assert.deepEqual(window.computeStats(12), (7.947019867549669));
  });
})
