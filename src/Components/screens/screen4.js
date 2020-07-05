import React, { Component } from "react";
import { Alert, Button, View, Text, StyleSheet } from "react-native";
import { NavigationActions } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';

const rutaAPI = 'http://winit.com.ar/api/comentario';

class Screen4View extends Component {

  constructor(props) {
    super(props);
  }

  /* https://code.i-harness.com/es/q/1ccdca4 */
  static navigationOptions = { title: "Pantalla Detalle 4" };

  navigate = () => {
    const navigateToScreen1 = NavigationActions.navigate({ routeName: "ruta1", params: { name: "Mensaje enviado desde pantalla 4" } });
    this.props.navigation.dispatch(navigateToScreen1);
  };

  /*---------------------------------- METODOS -------------------------------------*/
  componentDidMount() {
    this.ListarComentario();
  }/*FIN DE COMPONENTDIDMOUNT */

  ListarComentario() {
    return fetch(rutaAPI)
      .then((response) => response.json())
      .then((responseJson) => { console.log(responseJson); })
      .catch((error) => { console.error(error); });
  }/*Fin De Listar comentario */




  MostrarAlerta(Titulo, Mensaje) {
    // Works on both iOS and Android
    Alert.alert(
      Titulo.toString(),
      Mensaje.toString(),
      [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    )/* FIN DE ALERTA */
  }




  render() {
    return (
      <View style={{ flex: 1 }}>
        <View >
          <Button title="Volver a pantalla 1" onPress={this.navigate} />
          <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>
            <FontAwesome>{Icons.chevronLeft}</FontAwesome>
            Text
      </Text>
          <Text style={{ fontSize: 23 }} >GRILLA</Text>
          <View style={{ fontFamily: 'Helvetica' }}>
            <FontAwesomeIcon.Button name="facebook" backgroundColor="#3b5998" onPress={this.PedirToken}>
              Pedir Token
            </FontAwesomeIcon.Button>
            <Ionicons.Button name="facebook" backgroundColor="#3b5998" onPress={this.PedirToken}>
              Probar icono
            </Ionicons.Button>

          </View>

        </View>
      </View>
    );
  }/* FIN DE RENDER */

  /*-------------------------------FIN METODOS -------------------------------------*/


}
var styles = StyleSheet.create({
  container: {
    marginTop: 2,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1
  },
  image: {
    width: 107,
    padding: 10,
    color: 'orange',
  },
  description: {
    padding: 10,
    fontSize: 15,
    color: '#656565',

  }
});
export default Screen4View;
