import React, { Component } from "react";
import { TouchableOpacity, FlatList, Alert, Button, View, TextInput, Text } from "react-native";
import { NavigationActions } from "react-navigation";
import { EstilosGeneral, EstilosItem } from './estilos/estilos';

const rutaAPI = 'http://winit.com.ar/api/comentario';

class Screen3View extends Component {

  constructor(props) {
    super(props);
    this.state = { ValorIngresado: '', idIngresado: 0 }
  }

  static navigationOptions = { title: "Pantalla 3" };

  navigate = () => {
    const navigateToScreen1 = NavigationActions.navigate({ routeName: "ruta1", params: { name: "Mensaje enviado desde pantalla 3" } });
    this.props.navigation.dispatch(navigateToScreen1);
  };

  navigate2 = () => {
    const navigateToScreen4 = NavigationActions.navigate({ routeName: "ruta4", params: { name: "Mensaje enviado desde pantalla 3" } });
    this.props.navigation.dispatch(navigateToScreen4);
  };




  /*---------------------------------- METODOS -------------------------------------*/
  componentDidMount() {
    this.ListarComentario();
  }/*FIN DE COMPONENTDIDMOUNT */

  ListarComentario() {
    return fetch(rutaAPI)
      .then((response) => response.json())
      .then((responseJson) => { this.setState({ dataSource: responseJson, }, function () { }); })
      .catch((error) => { console.error(error); });
  }/*Fin De Listar comentario */

  ActualizarComentario(ComentarioTexto, ComentarioID) {
    fetch(rutaAPI, {
      method: 'PUT',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json', },
      body: JSON.stringify({ id: ComentarioID, descripcion: ComentarioTexto, }),
    });/*Fin de fetch */
    this.ListarComentario();
    this.MostrarAlerta('Actualizado', 'Se actualizó el comentario');
  }/*Fin de actualizar comentario */


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


  CrearComentario(ComentarioTexto, ComentarioID) {
    fetch(rutaAPI, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json', },
      body: JSON.stringify({ id: ComentarioID, descripcion: ComentarioTexto, }),
    });/*Fin de fetch */

    this.ListarComentario();
    this.MostrarAlerta('Creado', 'Se creó el comentario');
  };/*fin de CrearComentario */

  MostrarAlerta = (Titulo, Mensaje) => {
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
  };


  render() {
    return (
      <View style={{ flex: 1 }}>
        <View  >
          <Button title="Volver a pantalla 1" onPress={this.navigate} />
          <Text>ID</Text>
          <TextInput
            style={{ borderColor: 'orange', borderWidth: 5 }}
            onChangeText={(texto) => this.setState({ idIngresado: texto })}
            value={this.state.idIngresado}
          />
          <Text>Texto</Text>
          <TextInput
            style={{ borderColor: 'blue', borderWidth: 5 }}
            onChangeText={(texto) => this.setState({ ValorIngresado: texto })}
            value={this.state.ValorIngresado}
          />
          <Text>{'El usuario ingreso ID: ' + this.state.idIngresado}</Text>
          <Text>{'El usuario ingreso Comentario: ' + this.state.ValorIngresado}</Text>

          <Button color="#841584"
            accessibilityLabel="Learn more about this purple button"
            title="Crear Comentario" onPress={() => this.CrearComentario(this.state.ValorIngresado, this.state.idIngresado)} />
          <Button style={EstilosGeneral.EstiloBoton} title="Borrar Comentario" onPress={() => this.BorrarComentario(this.state.idIngresado)} />
          <Button color="red" title="Actualizar Comentario" onPress={() => this.ActualizarComentario(this.state.ValorIngresado, this.state.idIngresado)} />

          <View style={{ fontFamily: 'Helvetica' }}>
            <Text>Grilla de dataSource</Text>
            <FlatList
              data={this.state.dataSource}
              renderItem={
                ({ item }) =>
                  <View>
                    <TouchableOpacity onPress={this.navigate2} >
                      <Text>{item.ID}  {item.Descripcion}</Text>
                    </TouchableOpacity>
                  </View>
              }
              keyExtractor={({ ID }, index) => ID}
            />
          </View>

        </View>
      </View>
    );
  }/* FIN DE RENDER */

  /*-------------------------------FIN METODOS -------------------------------------*/


}

export default Screen3View;
