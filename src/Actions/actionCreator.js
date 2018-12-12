import { incrementCounter, decrementCounter } from "./actionTypes";


const incrementAction = () => ({
  type: incrementCounter
});

const decrementAction = () => ({
  type: decrementCounter
});


BorrarComentario = (ComentarioID) => {
  fetch(rutaAPI + '/' + ComentarioID + '/', {
    method: 'DELETE',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json', },
  })
    .then(res => { return res })
    .catch(err => console.log(err))

  this.ListarComentario();
  this.MostrarAlerta('Borrado', 'Se borró el comentario');
}/*Fin de Borrar Comentario */
export { incrementAction, decrementAction };
