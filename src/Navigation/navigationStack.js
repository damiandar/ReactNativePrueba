import { StackNavigator } from "react-navigation";
import Screen1 from "../Components/screen1";
import Screen2 from "../Components/screen2";
import Screen3 from "../Components/screen3";
import Screen4 from "../Components/screen4";

const navigator = StackNavigator({
  ruta1: { screen: Screen1 },
  ruta2: { screen: Screen2 },
  ruta3: { screen: Screen3 },
  ruta4: { screen: Screen4 }
});

export default navigator;
