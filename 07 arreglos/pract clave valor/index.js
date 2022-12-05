var estudiantes = [
    { id: 1, name: "Andres", lastname: "Zambrano", edad: 19 },
    { id: 2, name: "Yuly", lastname: "Lopez", edad: 18 },
    { id: 3, name: "Kristel", lastname: "Alcivar", edad: 20 },
    { id: 4, name: "Allison", lastname: "Saltos", edad: 22 },
];

/* console.log(estudiantes) */

var estudiante = estudiantes.map((dato) => {
    /* console.log(dato.name);
    console.log(dato["lastname"]); */

    return {
        nombre: dato.edad +" " + dato.lastname
    }
})

/* () => {

} */
console.log(estudiante);


var persona = [
    { id: 1, name: "Andres",  year: 2003 },
    { id: 2, name: "Yuly",  year: 2004 },
    { id: 3, name: "Kristel",  year: 2002 },
    { id: 4, name: "Allison",  year: 2000 },
];

var edad = persona.map((dato) => {
    let y = 2022 - dato.year

    return { 
        imp : dato.id + " " + dato.name + " - " + y + " años"
    }
})

console.log(edad);



var persona = [
    { id: 1, name: "Andres",  year: 2003 },
    { id: 2, name: "Yuly",  year: 2004 },
    { id: 3, name: "Kristel",  year: 2002 },
    { id: 4, name: "Allison",  year: 2000 },
];

var p = persona.filter((dato) => dato.year == 2000)

console.log(p);


// reduce

const notas = [10, 9, 8, 7]

var suma = notas.reduce((acumulador, elemento) => acumulador + elemento)
console.log(suma);

var persona = [
    { id: 1, name: "Andres",  year: 2003 },
    { id: 2, name: "Yuly",  year: 2004 },
    { id: 3, name: "Kristel",  year: 2002 },
    { id: 4, name: "Allison",  year: 2000 },
];

var s = persona.reduce((acumulador, elemento) => acumulador + elemento.year, 0)
console.log(s);

//find

var n = [10, 9, 8, 7]

var r = n.find((dato) => dato == 8)
console.log(r);

var persona = [
    { id: 1, name: "Andres",  year: 2003 },
    { id: 2, name: "Yuly",  year: 2004 },
    { id: 3, name: "Kristel",  year: 2002 },
    { id: 4, name: "Allison",  year: 2000 },
];

var r = persona.find((dato) => dato.year == 2004)
console.log(r);


//findIndex

var n = [10, 9, 8, 7]

var r = n.findIndex((dato) => dato == 8)
console.log(r);

//include
var persona = [
    { id: 1, name: "Andres",  year: 2003 },
    { id: 2, name: "Yuly",  year: 2004 },
    { id: 3, name: "Kristel",  year: 2002 },
    { id: 4, name: "Allison",  year: 2000 },
];
var p = persona.includes((dato) => dato.year === 2000)
console.log(p);


var buscador = (s) => {
    var persona = [
        { id: 1, name: "Andres",  year: 2003 },
        { id: 2, name: "Yuly",  year: 2004 },
        { id: 3, name: "Kristel",  year: 2002 },
        { id: 4, name: "Allison",  year: 2000 },
    ];

    var p = persona.filter((dato)=> dato.name.includes(s))
    return p
}

var a = buscador("s")
console.log(a);