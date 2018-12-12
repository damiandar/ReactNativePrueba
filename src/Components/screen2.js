import React, { Component } from "react";
import { FlatList, ActivityIndicator, View, StyleSheet } from "react-native";
import { NavigationActions } from "react-navigation";
import Cabecera from './compCabecera'
import DetalleItem from './compDetalleItem'

const opciones = { nombre: 'Juan23', image: 'https://facebook.github.io/react-native/img/favicon.png', };
const rutaAPI = 'http://winit.com.ar/api/busqueda';

class Screen2View extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
    console.log('22222222222222222222222222222222222222222222222');
    console.log(props);
    console.log('22222222222222222222222222222222222222222222222');
  }

  static navigationOptions = { title: "Esta es la pantalla2" };

  navigate = () => {
    const navigateToScreen1 = NavigationActions.navigate({ routeName: "ruta1", params: { name: "Mensaje enviado desde pantalla 2" } });
    this.props.navigation.dispatch(navigateToScreen1);
  };

  /*---------------------------------- METODOS -------------------------------------*/
  componentDidMount() {
    return fetch(rutaAPI)
      .then((response) => response.json())
      .then((responseJson) => { this.setState({ isLoading: false, dataSource: responseJson, }, function () { }); })
      .catch((error) => { console.error(error); });
  }/*FIN DE COMPONENTDIDMOUNT */


  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={{ flex: 1 }}>
        <Cabecera options={opciones} navegador={this.props} />
        <View style={{ fontFamily: 'Helvetica', flex: 10, }}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => <DetalleItem options={item} />}
            keyExtractor={({ id }, index) => id}
          />
        </View>
      </View>
    );
  }/* FIN DE RENDER */

  /*-------------------------------FIN METODOS -------------------------------------*/


}

export default Screen2View;
