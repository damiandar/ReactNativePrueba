import React, { Component } from "react";
import { TouchableOpacity, FlatList, Button, View, TextInput, Text } from "react-native";
import { NavigationActions } from "react-navigation";
import { navegar } from '../../Actions/actionNavegar';
import { EstilosGeneral, EstilosItem } from '../estilos/estilos';
import { Alerta } from '../../Actions/actionAlerta';
import { getComentarios, putComentario, postComentario, deleteComentario } from '../servicios/srvComentario';

class Screen3View extends Component {

  constructor(props) {
    super(props);
    this.state = { ValorIngresado: '', idIngresado: 0 }
  }

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
      .then((responseJson) => { this.setState({ dataSource: responseJson, }, function () { }); })
      .catch((error) => { console.error(error); });
  }


  ActualizarComentario(ComentarioTexto, ComentarioID) {
    putComentario(ComentarioTexto, ComentarioID);/*Fin de fetch */

    this.ListarComentario();
    Alerta('Actualizado', 'Se actualizó el comentario');
  }/*Fin de actualizar comentario */


  BorrarComentario = (ComentarioID) => {
    deleteComentario(ComentarioID)
      .then(res => { return res })
      .catch(err => console.log(err))

    this.ListarComentario();
    Alerta('Borrado', 'Se borró el comentario');
  }/*Fin de Borrar Comentario */


  CrearComentario(ComentarioTexto, ComentarioID) {
    postComentario(ComentarioTexto, ComentarioID);

    this.ListarComentario();
    Alerta('Creado', 'Se creó el comentario');
  };/*fin de CrearComentario */




  render() {
    return (
      <View style={{ flex: 1 }}>
        <View  >
          <Button title="Volver a pantalla 1" onPress={this.navegar(1)} />
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
                    <TouchableOpacity onPress={this.navegar(2)} >
                      <Text>{item.id}  {item.descripcion}</Text>
                    </TouchableOpacity>
                  </View>
              }
              keyExtractor={({ id }, index) => id}
            />
          </View>

        </View>
      </View>
    );
  }/* FIN DE RENDER */

  /*-------------------------------FIN METODOS -------------------------------------*/


}

export default Screen3View;
