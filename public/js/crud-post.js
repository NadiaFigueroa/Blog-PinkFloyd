export const crearPublicaciones = async (datos) => {
    const response = await fetch('/publicacion', {
        method: 'POST',
        headers: {
        'Content-Type':'application/json'
        },
        body: JSON.stringify(datos)
    })

    const data = await response.json()
    return data;
}

export const obtenerPublicaciones = async ( ) => {
    const response = await fetch('/publicaciones');
    const publicaciones = await response.json();
    return publicaciones
}

export const actualizarPublicacion = async (id) => {
    
    const response = await fetch(`/publicacion/${id}`, {
        method :'put',
        headers:{
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({titulo,descripcion, url_imagen , fecha_publicacion
        })
    })
    const data = await response.json();

    alert(data.msg);
    location.href = "/"
  
}

export const eliminarPublicacion = async (id) => {
    fetch()
  
}
export const mostrarDatosPublicaciones = (publicaciones, elemento) => {
    let registros = '';
    publicaciones.forEach(pub => {
        registros += `
            <section class="d-flex gap-2">
                <img src="${pub.url_imagen}" class="rounded" height="200" width="200">
                <div class="d-flex flex-column justify-content-between">
                <h4>${pub.titulo}</h4>
                <p>${pub.detalle}</p>
                <p>${pub.fecha_publicacion}</p>
                <button class="btn btn-link btn-edit" data-id="${pub.id}">Editar</button>
                <button class="btn btn-link btn-delete" data-id="${pub.id}">Eliminar</button>
                </div>
            </section>
        `
    });

    elemento.innerHTML = registros
}
