import { NavigationActions } from "react-navigation";

export const navegar = (Pagina) => {
    let RutaCompleta = "ruta" + Pagina;
    const navegaraPagina = NavigationActions.navigate({ routeName: RutaCompleta, params: { name: "Mensaje enviado desde pantalla 1" } });
    //this.props.navigation.dispatch(navegaraPagina);
  };

  /* Las rutas estan en el archivo
  navigation/navigationStack.js


https://reactnavigation.org/docs/navigation-prop/



    static navigationOptions = { title: "Pantalla 3" };

  navigate = () => {
    const navigateToScreen1 = NavigationActions.navigate({ routeName: "ruta1", params: { name: "Mensaje enviado desde pantalla 3" } });
    this.props.navigation.dispatch(navigateToScreen1);
  };

  navigate2 = () => {
    const navigateToScreen4 = NavigationActions.navigate({ routeName: "ruta4", params: { name: "Mensaje enviado desde pantalla 3" } });
    this.props.navigation.dispatch(navigateToScreen4);
  };

  */