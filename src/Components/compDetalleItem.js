import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { EstilosItem } from './estilos/estilos';

export default class DetalleItem extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    let item = this.props.options
    return (
      <View style={EstilosItem.Estiloflatview}>
        { /*  https://carlosazaustre.es/estructura-de-un-componente-en-react/*/}
        <View style={EstilosItem.colIzquierda}>
          { /*  <Image source={{uri: "http://goog.com/imagen.jpg" , width: 64, height: 64}}  resizeMode="stretch" /> */}
          <Image style={EstilosItem.stretch} source={require('./fotos/fotoauto1.jpg')} />
        </View>
        <View style={EstilosItem.colDerecha}>
          <Text style={EstilosItem.EstiloAnio}>{item.Anio} - Kms {item.KMS}</Text>
          <View style={EstilosItem.EstiloDescripcion}>
            <Text style={{ fontWeight: "bold" }} >{item.ModeloAuto.MarcaModelo.Nombre} </Text>
            <Text>{item.ModeloAuto.Nombre}</Text>
            <Text style={[{ color: 'red' }, EstilosItem.EstiloDescripcion]}>{item.Descripcion}</Text>
          </View>
        </View>
      </View>

    );
  }


}


