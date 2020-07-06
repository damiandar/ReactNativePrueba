const rutaAPI = 'http://localhost:5000/api/automotores';

export const getAutomotores = () => {
  return fetch(rutaAPI)
    .then((response) => response.json())
}