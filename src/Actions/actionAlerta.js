import { Alert} from "react-native";

export const Alerta=(Titulo, Mensaje)=> {
    Alert.alert(
      Titulo.toString(),
      Mensaje.toString(),
      [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: true }
    )/* FIN DE ALERTA */
  }

/*
  MostrarAlerta = (Titulo, Mensaje) => { 
    Alert.alert(
      Titulo.toString(),
      Mensaje.toString(),
      [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false } 
  };
*/
  
//slideshow.js
/*
export const plusSlides = (n)=>{
    showSlides(slideIndex += n);
}
*/

//Homepage.js
/*
import {plusSlides} from './slideshow'

handleClick (event) {
        plusSlides(1); 
    }
*/