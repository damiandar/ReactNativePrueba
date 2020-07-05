import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, Button } from 'react-native';
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";

const varCabecera = { titulo: 'Biens App', image: 'https://facebook.github.io/react-native/img/favicon.png', }
export default class Cabecera extends React.Component {

  constructor(props) {
    super(props);
  }

  navigate = () => {
    console.log('apretó volver');
    const IrAPagina1 = NavigationActions.navigate({
      routeName: "ruta3",
      params: { name: "Mensaje enviado desde pantalla cabecera" }
    });
    /*this.props.navigation.dispatch(IrAPagina1);*/
    this.props.navegador.navigation.dispatch(IrAPagina1)
  };



  render() {
    let options = this.props.options
    return (
      <View style={styles.Cabecera}>
        {
          /* 
              JSX    
              <Image style={styles.TituloApp} source={{uri: "http://goog.com/imagen.jpg" , width: 64, height: 64}}  resizeMode="stretch" />
              https://carlosazaustre.es/estructura-de-un-componente-en-react/
          */
        }
        <Image style={styles.TituloApp} source={{ uri: varCabecera.image, width: 64, height: 64 }} resizeMode="stretch" />
        <Text style={styles.ImagenTitulo}>{varCabecera.titulo} {options.nombre} </Text>
        <Button title="Cargar" onPress={this.navigate} />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  Cabecera: {

    //width:60,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#CB364A',
  },
  TituloApp: {

    backgroundColor: '#CB364A',
    flex: 2,
  },
  ImagenTitulo: {

    backgroundColor: '#CB364A',
    flex: 4,
    borderRadius: 35,
  },

});