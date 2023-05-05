import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import MainApp from "./Main";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const App = () => {
  const [loaded] = useFonts({
    Bold: require("./assets/fonts/Inter-Bold.ttf"),
    SemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    Medium: require("./assets/fonts/Inter-Medium.ttf"),
    Regular: require("./assets/fonts/Inter-Regular.ttf"),
    Light: require("./assets/fonts/Inter-Light.ttf"),
  });

  const [isFeed, setIsFeed] = useState(false);

  if (!loaded) return null;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer theme={theme}>
          <MainApp />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
