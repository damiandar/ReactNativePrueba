import React, { Component } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { navegar } from '../../Actions/actionNavegar';
import { NavigationActions } from "react-navigation";
import { getComentarios } from '../servicios/srvComentario';

class Screen4View extends Component {

  constructor(props) {
    super(props);
  }

  /* https://code.i-harness.com/es/q/1ccdca4 */

  navegar = (Pagina) => {
    let RutaCompleta = "ruta" + Pagina;
    const navegaraPagina = NavigationActions.navigate({ routeName: RutaCompleta, params: { name: "Mensaje enviado desde pantalla 1" } });
    this.props.navigation.dispatch(navegaraPagina);
  };
  /*---------------------------------- METODOS -------------------------------------*/
  componentDidMount() {
    this.ListarComentario();
  }/*FIN DE COMPONENTDIDMOUNT */

  ListarComentario() {
    return getComentarios()
      .then((responseJson) => { console.log(responseJson); })
      .catch((error) => { console.error(error); });
  }/*Fin De Listar comentario */


  render() {
    return (
      <View style={{ flex: 1 }}>
        <View >
          <Button title="Volver a pantalla 1"  />
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
