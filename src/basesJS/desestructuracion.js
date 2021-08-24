//Desestructuración

//const persona = {
    //nombre: "Meztli",
    //apellidos: "Valeriano Orozco",
    //email: "meztli.vo@ittux.edu.mx",

//}

//SPREAD para copiar cambiando la direccion de memoria
//const persona2 = {...persona};

//console.log("P1",persona.nombre);
//console.log("P2",persona2.nombre);

//persona2.nombre = "Juanito";

//console.log("P1",persona.nombre);
//console.log("P2",persona2.nombre);

//Des-estructuración de arreglos
const personajes = ['Harry', 'Hermione','Ron',
        'Hagrid','Dubby'];

const [, , personaje3] = personajes;

const caracteres = [...personajes];

caracteres[3] = "Luna";

console.log({personajes});
console.log({caracteres});
