import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";

import { incrementAction, decrementAction } from "../Actions/actionCreator";

class Screen1View extends Component {

  static navigationOptions = { title: "Bienvenido a la aplicación" };

  navigate = () => {
    const navigateToScreen2 = NavigationActions.navigate({ routeName: "ruta2", params: { name: "Mensaje enviado desde pantalla 1" } });
    this.props.navigation.dispatch(navigateToScreen2);
  };

  render() {
    const { counterCount, incrementAction, decrementAction } = this.props;
    return (
      <View style={styles.EstiloVistaPrincipal}   >
        <Text>{counterCount}</Text>
        <View style={{ height: 100, flexDirection: "row" }}>
          <TouchableOpacity onPress={() => decrementAction()} style={styles.EstiloBotonSumadores}   >
            <Text style={styles.EstiloLinksSumadores} >DECREMENTAR</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => incrementAction()} style={styles.EstiloBotonSumadores}   >
            <Text style={styles.EstiloLinksSumadores}>INCREMENTAR</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.EstiloBoton} onPress={this.navigate}  >
          <Text style={{ fontSize: 23, fontWeight: "600", color: "white" }}>Ir a la otra 2 -->>></Text>
        </TouchableOpacity>
      </View>
    );
  }/* Fin de render */

}

const mapStateToProps = state => ({
  counterCount: state.CounterReducer.counter
});

const mapDispatchToProps = {
  incrementAction,
  decrementAction
};

const styles = StyleSheet.create({
  EstiloBoton: { paddingVertical: 15, paddingHorizontal: 40, backgroundColor: "indigo" },
  EstiloVistaPrincipal: { flex: 1, backgroundColor: "yellowgreen", justifyContent: "center", alignItems: "center" },
  EstiloLinksSumadores: { textDecorationLine: "underline", fontWeight: "600" },
  EstiloBotonSumadores: { flex: 1, justifyContent: "center", alignItems: "center" }
});


const Screen1 = connect(mapStateToProps, mapDispatchToProps)(Screen1View);

export default Screen1;
