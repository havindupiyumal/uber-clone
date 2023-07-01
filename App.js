import { Provider } from "react-redux";

import { store } from "./src/services/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

import { Navigation } from "./src/infrastructure/navigation/index";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
