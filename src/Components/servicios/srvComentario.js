const rutaAPI = 'http://localhost:5000/api/comentarios';

export const getComentarios = () => {
  return fetch(rutaAPI)
    .then((response) => response.json())
}

export const putComentario = (ComentarioTexto, ComentarioID) => {
  fetch(rutaAPI, {
    method: 'PUT',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json', },
    body: JSON.stringify({ id: ComentarioID, descripcion: ComentarioTexto, }),
  });
}


export const deleteComentario = (ComentarioID) => {
  fetch(rutaAPI + '/' + ComentarioID + '/', {
    method: 'DELETE',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json', },
  })

}/*Fin de Borrar Comentario */


export const postComentario = (ComentarioTexto, ComentarioID) => {
  fetch(rutaAPI, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json', },
    body: JSON.stringify({ id: ComentarioID, descripcion: ComentarioTexto, }),
  });

};/*fin de CrearComentario */





/*

  ListarComentario() {
    return fetch(rutaAPI)
      .then((response) => response.json())
      .then((responseJson) => { this.setState({ dataSource: responseJson, }, function () { }); })
      .catch((error) => { console.error(error); });
  }

  ActualizarComentario(ComentarioTexto, ComentarioID) {
    fetch(rutaAPI, {
      method: 'PUT',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json', },
      body: JSON.stringify({ id: ComentarioID, descripcion: ComentarioTexto, }),
    });
    this.ListarComentario();
    Alerta('Actualizado', 'Se actualizó el comentario');
  }


  BorrarComentario = (ComentarioID) => {
    fetch(rutaAPI + '/' + ComentarioID + '/', {
      method: 'DELETE',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json', },
    })
      .then(res => { return res })
      .catch(err => console.log(err))

    this.ListarComentario();
    Alerta('Borrado', 'Se borró el comentario');
  }


  CrearComentario(ComentarioTexto, ComentarioID) {
    fetch(rutaAPI, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json', },
      body: JSON.stringify({ id: ComentarioID, descripcion: ComentarioTexto, }),
    });

    this.ListarComentario();
    Alerta('Creado', 'Se creó el comentario');
  };

  */