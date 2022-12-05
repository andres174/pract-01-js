var socket = io();

let mensaje = document.getElementById("mensaje");
let enviar = document.getElementById("enviar");
let contenedor = document.getElementById("contenedor");
let contPer = document.getElementById("contPer");


var persona;
var foto;

enviar.addEventListener('click', function () {

    socket.emit('chat:msg', mensaje.value);
    /* console.log(mensaje.value); */
})

socket.on('chat:msgBack', function(data){

    var date = new Date();

    contenedor.innerHTML += `<div class="message-data" >
                    ${persona} - ${date.getDate()} ${date.get} 
                    <img src="${foto}" alt="" >
    </div>
    <div class="message my-message">
      ${data}
    </div>`

    /* console.log('mensaje de retorno: ', data); */
})

function getData(event){
/*  console.log(event.children[1].children[0].innerHTML); */

 foto = event.children[0].currentSrc;
 persona = event.children[1].children[0].innerHTML;

 setP();



}

function setP(){
    contPer.innerHTML = `<a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
 <img src="${foto}" alt="avatar" />
</a>
<div class="chat-about">
 <h6 class="m-b-0">${persona}</h6>
 <small>online</small>
</div>`



}