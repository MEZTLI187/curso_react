const atributo = "nombre";
const persona = {
    nombre: 'Tony',
    apellido:'Stark',
    edad: 45,
    saludar: function(){
        console.log("Hola a todos");
    },
};

console.log(persona[atributo]);
persona.saludar();