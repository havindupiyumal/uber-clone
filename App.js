import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Provider } from "react-redux";

import { store } from "./src/services/redux/store";
import { NavigationContainer } from "@react-navigation/native";

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
