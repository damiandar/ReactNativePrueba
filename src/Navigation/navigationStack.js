import { StackNavigator } from "react-navigation";
import Screen1 from "../Components/screens/screen1";
import Screen2 from "../Components/screens/screen2";
import Screen3 from "../Components/screens/screen3";
import Screen4 from "../Components/screens/screen4";
import Screen5 from "../Components/screens/screen5";

const navigator = StackNavigator({
  ruta1: { screen: Screen1 },
  ruta2: { screen: Screen2 },
  ruta3: { screen: Screen3 },
  ruta4: { screen: Screen4 },
  ruta5: { screen: Screen5 }
});

export default navigator;
