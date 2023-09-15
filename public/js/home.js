import { obtenerPublicaciones, mostrarDatosPublicaciones} from './crud-post.js';


document.addEventListener('DOMContentLoaded', async () => {
    console.log("DOM Cargado!");
    const publicaciones = await obtenerPublicaciones();
    const main = document.querySelector('#lista-publicaciones');
    mostrarDatosPublicaciones(publicaciones, main);

let botones = document.getElementsByClassName('btn-edit'); 
     
    for(let i = 0 ; i < botones.length; i++){
    
    botones[i].addEventListener ('click', (e) =>{
    window.location.href = './admin/' + e.currentTarget.dataset.id;
    console.log(e.currentTarget.dataset.id);
    })      
}


let btnEliminar = document.getElementsByClassName('btn-delete'); 
     
    for(let i = 0 ; i < btnEliminar.length; i++){
    
    btnEliminar[i].addEventListener ('click', async (e) =>{
    let id = e.currentTarget.dataset.id;
    const response = await fetch(`/publicacion/${id}`, {
        method: 'delete',
        headers: {
        'Content-Type':'application/json'
        }
     })
     const data = await response.json();
    
    alert(data.msg);
    location.href = '/';
    })      
}

})