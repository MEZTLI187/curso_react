//Asi se importa cuando es por default
import heroes from "../data/heroes";

//callback = funcion ejecutandose dentro de otra funcion
//const nuevo = heroes.map((item) => {  //forma de recorrer el arreglo
    //return {...item, version: 1}; //usando desestructuracion para no modificar arreglo original
//});

//filter-> devolver los elementos de acuerdo a una condicion
//const nuevo = heroes.filter((item) => {
  //  return item.owner === "DC";
//});

//find -> encontrar un elemento dentro de un arreglo
const nuevo = heroes.find((item) => {
    return item.owner === "Marvel";    
})

console.log({heroes});
console.log({nuevo});