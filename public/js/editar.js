
import { actualizarPublicacion } from './crud-post.js';

const formGuardar = document.querySelector("#form-guardar");

const obtenerPublicacion = async (id) => {
    const response = await fetch (`/publicacion/${id}`)
    const data = await response.json ()
    return data;
}

document.addEventListener('DOMContentLoaded', async () =>{
    const id = formGuardar.dataset.id;
    const publicacion = await obtenerPublicacion(id);
    const titulo = document.querySelector('#titulo-post')
    const descripcion = document.querySelector('#detalle-post')
    const url_imagen = document.querySelector('#url_img')
    const fecha = document.querySelector('#fecha')


    titulo.value = publicacion.titulo;
    descripcion.value = publicacion.detalle;
    url_imagen.value = publicacion.url_imagen;
    fecha.value = publicacion.fecha_publicacion;

})

formGuardar.addEventListener('submit', async (e) =>{
    e.preventDefault();
 const titulo = document.querySelector('#titulo-post').value;
 const detalle = document.querySelector('#detalle-post').value;
 const url_imagen = document.querySelector('#url_img').value;
 const fecha_publicacion = document.querySelector('#fecha').value;

 const id = formGuardar.dataset.id;
 const response = await fetch(`/publicacion/${id}`, {
    method: 'put',
    headers: {
    'Content-Type':'application/json'
    },
    body: JSON.stringify({ titulo, detalle, url_imagen, fecha_publicacion})
 })
 const data = await response.json();

 alert(data.msg);
 location.href = "/"

})

