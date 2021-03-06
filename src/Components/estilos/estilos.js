
import { StyleSheet } from 'react-native';

const EstilosGeneral = StyleSheet.create({
  EstiloBoton: { paddingVertical: 15, paddingHorizontal: 40, backgroundColor: "indigo" },
})
const EstilosItem = StyleSheet.create({

  Estiloflatview: {
    justifyContent: 'center',
    padding: 5,
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    flexDirection: 'row',
    //backgroundColor: '#2196F3',
  },
  colIzquierda: {

    //width:60,
    flex: 2,
  },
  colDerecha: {

    //width:anchoDerecha,
    flex: 5,
    backgroundColor: '#CB36C9',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#F5FCFF',
  },
  stretch: {
    flex: 1,
    width: 80,
    height: 50,
    borderRadius: 50,
  },

  EstiloAnio: {

    fontSize: 18,
    backgroundColor: '#8BC34A'

  },
  EstiloDescripcion: {
    color: 'red',
    backgroundColor: '#e3aa1a',
  }

})

export { EstilosGeneral, EstilosItem }