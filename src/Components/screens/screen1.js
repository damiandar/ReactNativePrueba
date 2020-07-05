import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { EstilosGeneral, EstilosItem } from '../estilos/estilos';

import { incrementAction, decrementAction } from "../../Actions/actionCreator";

class Screen1View extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = { title: "jBienvenido a la aplicación 2" };

  navegar = (Pagina) => {
    let RutaCompleta = "ruta" + Pagina;
    const navegaraPagina = NavigationActions.navigate({ routeName: RutaCompleta, params: { name: "Mensaje enviado desde pantalla 1" } });
    this.props.navigation.dispatch(navegaraPagina);
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

        <TouchableOpacity style={EstilosGeneral.EstiloBoton} onPress={() => this.navegar(2)}  >
          <Text style={styles.EstiloTextoBoton}>Ir a la otra 2 --</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.EstiloBoton} onPress={() => this.navegar(3)}  >
          <Text style={styles.EstiloTextoBoton}>Ir a la otra 3 --</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.EstiloBoton} onPress={() => this.navegar(4)}  >
          <Text style={styles.EstiloTextoBoton}>Ir a pagina 4 --</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.EstiloBoton} onPress={() => this.navegar(5)}  >
          <Text style={styles.EstiloTextoBoton}>Ir a pagina 5 --</Text>
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
  EstiloBotonSumadores: { flex: 1, justifyContent: "center", alignItems: "center" },
  EstiloTextoBoton: { fontSize: 23, fontWeight: "600", color: "white" }
});


const Screen1 = connect(mapStateToProps, mapDispatchToProps)(Screen1View);

export default Screen1;
