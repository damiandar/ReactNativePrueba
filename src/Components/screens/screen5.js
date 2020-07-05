import React, { Component } from "react";
import { FlatList, View, TouchableOpacity, Text, Alert } from "react-native";
import { NavigationActions } from "react-navigation";



const rutaSegura = 'http://winit.com.ar/api/customers';
const rutaToken = 'http://winit.com.ar/api/login/authenticate';

class Screen5View extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, tokUsuario: '' }
  }

  static navigationOptions = { title: "Esta 55555" };



  /*---------------------------------- METODOS -------------------------------------*/

  PedirToken = () => {
    this.setState({ isLoading: false, });
    fetch(rutaToken, {
      method: 'post',
      headers: {
        'Accept': 'application/json', 'Content-Type': 'application/json'
      },
      body: JSON.stringify({ Username: 'damian', Password: '123456', })
    })
      .then((responseJson) => {
        this.setState({ tokUsuario: responseJson });
      });

  }

  ListarCustomers(TOKADO) {

    let ArmadoToken = 'Bearer ' + TOKADO.slice(1, TOKADO.length - 1);

    return fetch(rutaSegura, {
      method: 'GET',
      headers: { Authorization: ArmadoToken, },
    })
      .then((responseJson) => { this.setState({ dataSource: responseJson._bodyText, }, function () { }); })
      .catch(() => { console.error("ERROR AL PEDIR CLIENTES"); });

  }/*Fin De Listar comentario */

  render() {

    if (typeof this.state.tokUsuario._bodyText === "undefined") {
      return (
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={this.PedirToken} style={{}}  >
            <Text style={{ fontSize: 23, fontWeight: "600" }}> PEDIR TOKEN </Text>
          </TouchableOpacity>
        </View>
      );
    } /*FIN DEL IF */
    else {
      let MITOK = this.state.tokUsuario._bodyText;
      let CLIENTES = this.state.dataSource;
      if (typeof CLIENTES === "undefined") {
        CLIENTES = "";
      }
      console.log(CLIENTES);
      return (
        <View style={{ flex: 1 }}>
          <Text> {MITOK}  </Text>

          <TouchableOpacity onPress={() => this.ListarCustomers(this.state.tokUsuario._bodyText)}  >
            <Text style={{ fontSize: 23, fontWeight: "600" }}> PEDIR CLIENTES </Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 35 }} >{CLIENTES}</Text>
        </View>
      );




    }/*FIN DEL ELSE */


  }/* FIN DE RENDER */

  /*-------------------------------FIN METODOS -------------------------------------*/


}

export default Screen5View;
