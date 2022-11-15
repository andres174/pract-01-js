//mainpulacion de arreglos

var arreglo = [4, 43, 2, 56];

for (let index = 0; index < arreglo.length; index++) {
  console.log(arreglo[index]);
}
var persona = [
  {
    nombre: "Andres",
    apellido: "Zambrano",
    edad: 19,
    habilidades: {
      css: "si",
      html: "si",
      ng: "si",
      php: "si",
    },
  },
  {
    nombre: "Magdalena",
    apellido: "Moreira",
    edad: 22,
    habilidades: {
      css: "si",
      html: "si",
      ng: "si",
      php: "si",
    },
  },
];

persona.forEach((element) => {
  console.log(element.nombre);
  console.log(element.apellido);
  console.log(element.edad);
  console.log(element.habilidades.css);
});

var array = [1, 2, 3];
console.log(array);

array.push(4);
console.log(array);
array.pop(4);
console.log(array);

array.shift(1);
console.log(array);

array.unshift(1);
console.log(array);

var estudiantes = [{ id: 12, name: "Andres", lastname: "Zambrano", edad: 19 }];

var list = estudiantes.map((dato) => {
  return {
    fullname: dato["name"] + " " + dato["lastname"],
  };
});

console.log(list);

var estudiantes = [{ id: 12, name: "Andres", lastname: "Zambrano", edad: 19 }];

var list = estudiantes.map((dato) => {
  return {
    ...dato,
    fullname: dato["name"] + " " + dato["lastname"],
  };
});

console.log(list);

var estudiantes = [
  { id: 12, name: "Andres", lastname: "Zambrano", edad: 19 },
  { id: 4, name: "Andres", lastname: "Zambrano", edad: 19 },
  { id: 2, name: "Andres", lastname: "Zambrano", edad: 19 },
  { id: 5, name: "Andres", lastname: "Zambrano", edad: 19 },
];

var fil = estudiantes.filter((dato) => dato.id === 3);

console.log(estudiantes);
console.log(fil);
