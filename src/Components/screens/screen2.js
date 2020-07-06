import React, { Component } from "react";
import { FlatList, ActivityIndicator, View, StyleSheet } from "react-native";
import { NavigationActions } from "react-navigation";
import Cabecera from '../compCabecera'
import DetalleItem from '../compDetalleItem'
import { getAutomotores } from '../servicios/srvAutomotor';


const opciones = { nombre: 'Juan23', image: 'https://facebook.github.io/react-native/img/favicon.png', };
 
class Screen2View extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  /*---------------------------------NAVEGACION------------------------------------*/
  static navigationOptions = { title: "Detalle de autos 2 " };

  navegar = (Pagina) => {
    let RutaCompleta = "ruta" + Pagina;
    const navegaraPagina = NavigationActions.navigate({ routeName: RutaCompleta, params: { name: "Mensaje enviado desde pantalla 1" } });
    this.props.navigation.dispatch(navegaraPagina);
  };
  

  /*---------------------------------- METODOS -------------------------------------*/
  componentDidMount() {
    return getAutomotores()
      .then((responseJson) => { this.setState({ isLoading: false, dataSource: responseJson, }, function () { }); })
      .catch((error) => { console.error("Error: " + error); });
  }

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
        <View style={{ flex: 10, }}>
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
