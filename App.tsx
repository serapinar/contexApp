import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "./src/screens/FirstScreen.tsx";
import SecondScreen from "./src/screens/SecondScreen.tsx";
import HomeScreen from "./src/screens/HomeScreen.tsx";
import { UserProvider } from "./src/UserContex.tsx";

const Stack = createNativeStackNavigator();

function App() {

  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="First" component={FirstScreen} />
          <Stack.Screen name="Second" component={SecondScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

export default App;
