import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { EstilosItem } from './estilos/estilos';

export default class DetalleItem extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    let item = this.props.options
    return (

      <View style={EstilosItem.Estiloflatview}>
        { /* JSX    <Image style={EstilosItem.TituloApp} source={{uri: "http://goog.com/imagen.jpg" , width: 64, height: 64}}  resizeMode="stretch" />
          https://carlosazaustre.es/estructura-de-un-componente-en-react/
          */
        }

        <View style={EstilosItem.colIzquierda}>
          <Image style={EstilosItem.stretch} source={require('./fotos/fotoauto1.jpg')} />
        </View>
        <View style={EstilosItem.colDerecha}>
          <Text style={EstilosItem.EstiloAnio}>{item.Anio} - Kms {item.KMS}</Text>
          <View style={EstilosItem.EstiloDescripcion}>
            <Text style={{ fontWeight: "bold" }} >{item.ModeloAuto.MarcaModelo.Nombre} </Text>
            <Text>{item.ModeloAuto.Nombre}</Text>
            <Text style={EstilosItem.EstiloDescripcion}>{item.Descripcion}</Text>
          </View>
        </View>
      </View>

    );
  }


}


