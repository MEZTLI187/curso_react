//Asi se importa cuando es por default
import heroes from "./data/heroes";

//callback = funcion ejecutandose dentro de otra funcion
const nuevo = heroes.map((item) => {
    return {...item, version: 1}; //usando desestructuracion para no modificar arreglo original
});

console.log({heroes});
console.log({nuevo});