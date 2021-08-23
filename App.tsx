import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/home";
import { store } from "./store/store";
import Form from "./screens/form";

export type RootStackParamList = {
  Home: undefined;
  Form: undefined;
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Form" component={Form} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
